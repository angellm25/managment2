
import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema (
  {
    name : {
      type: String
    },
    roomType : {
      type: Object 
    },
    price: {
      type: Number
    }
  }
)

const RoomModel  = mongoose.model("room", roomSchema);

export default RoomModel

