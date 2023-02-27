import roomTypeService from '../services/roomType.service';

import { Request, Response } from "express";
class RoomTypeController {

    async addRoomType(req: Request, res: Response) {

        const body = req.body

        const existingRoomtype = await roomTypeService.getRoomTypes({})
        if(existingRoomtype) return res.status(404).send({success: false, message: "Roomtype already exists",})

        const CreatedRoomType = await roomTypeService.addRoomType(body)
        return res.status(200).send({success: true, message: "Roomtype created successfully", data: CreatedRoomType})
    }


    async getRoomTypes(req: Request, res:Response) {
        const allRoomtypes = await roomTypeService.getRoomTypes({})
        return res.status(200).send({success: true, message: "Roomtypes fetched sucessfully", data: allRoomtypes})
    }
}

export default new RoomTypeController()