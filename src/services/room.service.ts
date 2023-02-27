
import RoomModel from "../model/roomModel"

class roomService {

    //add room 
    async addRoom(data: IRoom) {  
        return await RoomModel.create(data)
    }

    async updateRoom(id: string, Updatedata: Partial<IRoom>){
        return await RoomModel.findByIdAndUpdate(id, Updatedata, {new: true})
    }

    
    async deleteRoom(id: string){
        return await RoomModel.findOneAndDelete({_id: id})
    }
 
    // get single room
    async getRoomId(id: string ) {  
        return await RoomModel.findOne({_id: id})
    }

    async getRoom(filter:Partial<IRoom> & {_id?: string}){
        return await RoomModel.findOne(filter)
    }
}
export default new roomService()