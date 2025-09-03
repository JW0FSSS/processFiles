import express from "express";
import { dpiRouter } from "./router/dpi.router.js";
import cors from "cors";

const app = express();

app.use(cors(`${process.env.CORS_ORIGIN || "*"}`));
app.use(express.json());

app.use("/dpi", dpiRouter);

app.get("/health", (req, res) => {
  res.send("Welcome to the DPI");
});

app.use((req,res,next)=>{
    res.status(404).send("Not found");
})

app.use((err, req, res, next) => {
  console.error("Error occurred:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(process.env.PORT || 40000, () => {
  console.log(`Server is running on port ${process.env.PORT || 40000}`);
});