import { Router } from "express";
import multer  from "multer";
import { DPIController } from "../controller/DPIController.js";

export const dpiRouter = Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

dpiRouter.post("/", upload.single('file'), DPIController);

