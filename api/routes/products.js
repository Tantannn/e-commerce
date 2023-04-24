import express from 'express'
const router = express.Router()
import { getProducts, getProduct, updateProduct, deleteProduct } from '../controllers/products.js'
//CREATE
router.post('/', updateProduct)
//UPDATE
router.put('/:id', deleteProduct)
//DELETE
router.delete('/:id', deleteProduct)
//GET
router.get('/:id', getProduct)
router.get('/', getProducts)
export default router