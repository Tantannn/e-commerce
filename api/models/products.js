import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        category: {
            type: "string",
            required: true,
        },
        name: {
            type: "String",
            required: true,
        },
        price: {
            type: "Number",
            required: true,
        },
        img1: {
            type: "String",
        },
        img2: {
            type: "String",
        },
        img3: {
            type: "String",
        },
        img4: {
            type: "String",
        },

        long_desc: {
            type: "String",
            required: true,
        },
        short_desc: {
            type: "String",
            required: true,
        },
    },
    { timestamps: true },
);
export default mongoose.model('productions', ProductSchema)

