import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
      require:true
    },
    phone: {
      type: String,
    },
    password: {
      type: String,
      require:true
    },
    address: {
      type: String,
      require:true
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isConsultant: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Users", UserSchema);
