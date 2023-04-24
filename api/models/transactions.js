import mongoose from "mongoose";


const TransactionSchema = new mongoose.Schema({
  user: {
    type: Object,
    require: true,
  },

  rooms:Array,
  price: {
    type: Number,
    require: true,
  },
  payment: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
});
export default mongoose.model('transactions', TransactionSchema)
