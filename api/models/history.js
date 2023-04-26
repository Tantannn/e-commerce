import mongoose from "mongoose";


const HistorySchema = new mongoose.Schema({
  idUser: {
    type: Object,
    require: true,
  },
  idProduct: {
    type: String,
    require: true,
  },
  count: {
    type: Number,
    require: true,
  },
  img: {
    type: String,
    require: true,
  },
  nameProduct: {
    type: String,
    require: true,
  },
  priceProduct: {
    type: Number,
    require: true,
  },
});
export default mongoose.model('history', HistorySchema)
