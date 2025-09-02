import { DpiTransform } from "../services/dpiService.js"; 

export async function DPIController(req,res) {
    const { dpi } = req.body;
    const imageBuffer = req?.file?.buffer;

    const formatedDpi = +dpi || 300;
    console.log("logging");

    try {
        const result = await DpiTransform({ imageBuffer, dpi: formatedDpi });
        res.json(result);
    } catch (error) {
        console.error("Error processing image:", error);
        res.status(500).json({ error: "Failed to process image" });
    }
}
