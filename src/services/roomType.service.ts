import roomTypeModel from "../model/roomTypeModel"

class roomTypeService {

    async getRoomTypes(filter:Partial<IRoom> & {_id?: string} ) {  
        return await roomTypeModel.find(filter)
    }

    async addRoomType(data:IRoomType) {  
        return await roomTypeModel.create(data)
    }
}

export default new roomTypeService()