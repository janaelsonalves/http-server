import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: String,
  weigth: Number,
  height: Number,
  birth: Date
});

const UserModel = model("User", UserSchema);

export { UserModel, UserSchema };
