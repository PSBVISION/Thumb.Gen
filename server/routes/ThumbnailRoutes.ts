import express from "express";
import { generateThumbnail } from "../controllers/ThumbnailControllers.js";
import protect from "../middlewares/auth.js";


const ThumbnailRouter = express.Router();
ThumbnailRouter.post('/generate',protect, generateThumbnail);
ThumbnailRouter.delete('/delete/:id',protect, generateThumbnail)

export default ThumbnailRouter;