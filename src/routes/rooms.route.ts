import express from "express";
const router = express.Router();
import roomController from "../controllers/roomController";
import { authenticate } from "../middleware/authMiddleware";

router.post('/api/v1/rooms', roomController.addRoom)
router.get('/api/v1/rooms?search={searchRoomNameMatch}&roomType={searchRoomTypeNameMatch}&minPrice={searchRoomMinimumPriceMatch}&maxPrice={searchRoomMaximumPriceMatch}', roomController.getRoom)
router.delete('/api/v1/rooms/{roomId}', roomController.deleteRoom)
router.patch('/api/v1/rooms/{roomId}', roomController.updateRoom)
router.get('/api/v1/rooms/{roomId}', roomController.getRoomId)

export default router 