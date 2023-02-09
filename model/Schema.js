import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  user: String,
  email: String,
  password: String
})

const Users = models.user || model("user",userSchema)


export default Users;