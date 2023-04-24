import ProductSchema from '../models/products.js'

export const createProduct = async (req, res, next) => {
    const newProduct = new ProductSchema(req.body)
    try {
        const createProduct = await newProduct.save()
        res.status(200).json(createProduct)
    } catch (error) {
        next(error)
    }
}
export const updateProduct = async (req, res, next) => {
    try {
        const product = await ProductSchema.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(product)
    } catch (error) {
        next(error)
    }
}
export const deleteProduct = async (req, res, next) => {
    try {
        await findByIdAndDelete(req.params.id)
        res.status(200).json('product deleted')
    } catch (error) {
        next(error)
    }
}
export const getProduct = async (req, res, next) => {
    try {
        const product = await ProductSchema.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        next(error)
    }
}
export const getProducts = async (req, res, next) => {
    try {
        const products = await ProductSchema.find()
        res.status(200).json(products)
    } catch (error) {
        next(error)
    }
}