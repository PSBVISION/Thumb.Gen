import express from 'express'
import { getThumbnailById, getUsersThumbnails } from '../controllers/UserControllers.js';
import protect from '../middlewares/auth.js';

const UserRouter = express.Router();
UserRouter.get('/thumbnails',protect, getUsersThumbnails)
UserRouter.get('/thumbnail/:id',protect, getThumbnailById) 

export default UserRouter;