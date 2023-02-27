import express from "express";
const router = express.Router();
import roomTypeController from "../controllers/roomTypeController";
import {authenticate}  from "../middleware/authMiddleware";


router.post('/api/v1/rooms-types', roomTypeController.addRoomType)
router.get('/ap/v1/rooms-types', roomTypeController.getRoomTypes)

export default router