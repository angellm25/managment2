

import { Request, Response } from "express";
import roomService from "../services/room.service";

class RoomController{
    async addRoom(req: Request, res: Response) {
        const body = req.body
        const existingRoom = await roomService.getRoom({title: body.title.toLowerCase()})
        if(existingRoom) return res.status(404).send({success: false, message: "Room already exists",})

        const CreatedRoom = await roomService.addRoom(body)
        return res.status(200).send({success: true, message: "Room created successfully", data: CreatedRoom})
    }

    async getRoomId(req: Request, res: Response){
        const RoomId = req.params.id
        const RoomToFetch = await roomService.getRoom({_id: RoomId})

        if(!RoomToFetch) return res.status(400).send({success: false, message: "Room not found!"})
        return res.status(200).send({success: true, message:"Room fetched successfully", data: RoomToFetch})
    }

    async getRoom(req: Request, res: Response){
        const Room = req.params.filter
        const RoomToFetch = await roomService.getRoom({})

        if(!RoomToFetch) return res.status(400).send({success: false, message: "Room not found!"})
        return res.status(200).send({success: true, message:"Room fetched successfully", data: RoomToFetch})
    }

    async updateRoom(req: Request, res: Response) {
        const Updatedata = req.body
        const RoomId = req.params.id

        const existingRoom = await roomService.getRoom({_id: RoomId})
        if(!existingRoom) return res.status(404).send({success:false, message: "Book not found"})

        if(Updatedata.title){
            const existingRoomTitle = await roomService.getRoom({title: Updatedata.title.toLowerCse()})
            if(existingRoomTitle){
                if(existingRoomTitle._id.toString()  !==RoomId) {return res.status(402).send({success: false, message:"The Room already exists"})}

            }
        }

        const updatedRoom = await roomService.updateRoom(RoomId, Updatedata)
        return res.status(200).send({success: true, message:"Room Updated Successfully", data: updatedRoom})
    }

    async deleteRoom(req: Request, res: Response){
        const RoomId = req.params.id 
        const RoomToFetch = await roomService.getRoom({_id: RoomId})

        if(!RoomToFetch) return res.status(405).send({success: false, message: " Room not found"})
        await roomService.deleteRoom(RoomId) 
        return  res.status(200).send({success: true, message: "Room Deleted", data:RoomToFetch})
    }
}

export default new RoomController()