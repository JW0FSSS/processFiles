import { DpiTransform } from "../services/dpiService.js"; 

export async function DPIController(req,res) {
    const { dpi } = req.body;
    const imageBuffer = req?.file?.buffer;

    const formatedDpi = +dpi || 300;
    const name = req?.file?.originalname;
    const formatedName = name.split(".")[0];
    console.log(formatedName);
    
    try {
        const bytes = await DpiTransform({ imageBuffer, dpi: formatedDpi });
        res.json({bytes,fileName: formatedName});
    } catch (error) {
        console.error("Error processing image:", error);
        res.status(500).json({ error: "Failed to process image" });
    }
}
