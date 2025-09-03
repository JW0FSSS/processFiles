import sharp from "sharp";

export async function DpiTransform({imageBuffer,dpi=300}) {
    return await sharp(imageBuffer)
        .withMetadata({density:dpi})
        .jpeg()
        .toBuffer();
}