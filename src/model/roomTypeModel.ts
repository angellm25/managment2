import mongoose from 'mongoose';




const roomtypeSchema = new mongoose.Schema (
  {
    name : {
      type: String
    }
  }
)

const roomTypeModel = mongoose.model("roomtype", roomtypeSchema);

export default roomTypeModel