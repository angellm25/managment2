import mongoose from 'mongoose';


//add roles [admin and guest
const ROLES = {
    ADMIN : "ADMIN",
    GUEST: "GUEST"
}
const Schema = mongoose.Schema;
 
const UserSchema = new Schema({
 email: {
  type: String,
  required: true,
  unique: true,
  trim: true
 },
 password: {
  type: String,
  required: true
 },
 role: {
  type: String,
  required: true,
  default: 'admin',
  enum: ["admin", "guest"]
 },
 accessToken: {
  type: String
 }
});
 
const User = mongoose.model('user', UserSchema);
    
export  default User 