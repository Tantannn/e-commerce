import express from 'express'
import {verifyAdmin} from '../utils/verifyToken.js'

const router = express.Router()
import { getProducts, getProduct, updateProduct, deleteProduct, createProduct } from '../controllers/products.js'
//CREATE
router.post('/', createProduct)
//UPDATE
router.put('/:id', updateProduct)
//DELETE
router.delete('/:id', deleteProduct)
//GET
router.get('/find/:id', getProduct)
router.get('/', getProducts)
export default router