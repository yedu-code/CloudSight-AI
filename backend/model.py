import torch
import torch.nn as nn


class ConvBlock(nn.Module):
    """
    Two-layer convolution block:
    Conv2d (bias=False) -> BatchNorm2d -> ReLU -> Conv2d (bias=False) -> BatchNorm2d -> ReLU
    Matches the sequential 'block' naming in the checkpoint where Conv2d precedes BatchNorm2d.
    """
    def __init__(self, in_channels: int, out_channels: int):
        super().__init__()
        self.block = nn.Sequential(
            nn.Conv2d(in_channels, out_channels, kernel_size=3, padding=1, bias=False),
            nn.BatchNorm2d(out_channels),
            nn.ReLU(inplace=True),
            nn.Conv2d(out_channels, out_channels, kernel_size=3, padding=1, bias=False),
            nn.BatchNorm2d(out_channels),
            nn.ReLU(inplace=True),
        )

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        return self.block(x)


class UNet(nn.Module):
    """
    U-Net architecture matching the 'models/unet_clean_best.pth' checkpoint:
    - Input: 4 channels
    - Encoder: 16 -> 32 -> 64 -> 128 channels
    - Bottleneck: 256 channels
    - Decoder: 128 -> 64 -> 32 -> 16 channels using ConvTranspose2d + Skip Connections
    - Output: 1 channel (1x1 Conv)
    """
    def __init__(self, in_channels: int = 4, out_channels: int = 1):
        super().__init__()
        # Encoder blocks
        self.enc1 = ConvBlock(in_channels, 16)
        self.enc2 = ConvBlock(16, 32)
        self.enc3 = ConvBlock(32, 64)
        self.enc4 = ConvBlock(64, 128)

        self.pool = nn.MaxPool2d(kernel_size=2, stride=2)

        # Bottleneck
        self.bottleneck = ConvBlock(128, 256)

        # Decoder 4
        self.up4 = nn.ConvTranspose2d(256, 128, kernel_size=2, stride=2)
        self.dec4 = ConvBlock(256, 128)  # 128 (skip) + 128 (up) = 256

        # Decoder 3
        self.up3 = nn.ConvTranspose2d(128, 64, kernel_size=2, stride=2)
        self.dec3 = ConvBlock(128, 64)   # 64 (skip) + 64 (up) = 128

        # Decoder 2
        self.up2 = nn.ConvTranspose2d(64, 32, kernel_size=2, stride=2)
        self.dec2 = ConvBlock(64, 32)    # 32 (skip) + 32 (up) = 64

        # Decoder 1
        self.up1 = nn.ConvTranspose2d(32, 16, kernel_size=2, stride=2)
        self.dec1 = ConvBlock(32, 16)    # 16 (skip) + 16 (up) = 32

        # Final 1x1 convolution
        self.final = nn.Conv2d(16, out_channels, kernel_size=1)

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        # Encoder
        e1 = self.enc1(x)               # [B, 16, H, W]
        e2 = self.enc2(self.pool(e1))   # [B, 32, H/2, W/2]
        e3 = self.enc3(self.pool(e2))   # [B, 64, H/4, W/4]
        e4 = self.enc4(self.pool(e3))   # [B, 128, H/8, W/8]

        # Bottleneck
        b = self.bottleneck(self.pool(e4))  # [B, 256, H/16, W/16]

        # Decoder with skip connections
        d4 = self.up4(b)
        d4 = torch.cat([d4, e4], dim=1)
        d4 = self.dec4(d4)

        d3 = self.up3(d4)
        d3 = torch.cat([d3, e3], dim=1)
        d3 = self.dec3(d3)

        d2 = self.up2(d3)
        d2 = torch.cat([d2, e2], dim=1)
        d2 = self.dec2(d2)

        d1 = self.up1(d2)
        d1 = torch.cat([d1, e1], dim=1)
        d1 = self.dec1(d1)

        # Output logits
        out = self.final(d1)
        return out


def load_model(checkpoint_path: str = "models/unet_clean_best.pth", device: str = "cpu") -> UNet:
    """
    Loads UNet architecture and strict-loads state_dict weights from checkpoint.
    """
    model = UNet(in_channels=4, out_channels=1)
    checkpoint = torch.load(checkpoint_path, map_location=device, weights_only=True)
    state_dict = checkpoint["model_state_dict"] if "model_state_dict" in checkpoint else checkpoint
    model.load_state_dict(state_dict, strict=True)
    model.to(device)
    model.eval()
    return model


if __name__ == "__main__":
    checkpoint_file = "models/unet_clean_best.pth"
    print(f"Loading checkpoint from: {checkpoint_file} with strict=True...")
    loaded_model = load_model(checkpoint_file, device="cpu")
    print("Checkpoint loaded successfully with strict=True!")

    print("Running dummy inference test with shape (1, 4, 512, 512)...")
    dummy_input = torch.randn(1, 4, 512, 512, dtype=torch.float32)
    with torch.no_grad():
        output = loaded_model(dummy_input)

    print(f"Output shape: {output.shape}")
    assert output.shape == (1, 1, 512, 512), f"Expected (1, 1, 512, 512), got {output.shape}"
    print("Dummy test passed: Output shape is exactly (1, 1, 512, 512)!")
