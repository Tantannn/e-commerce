import express from 'express'
import {verifyAdmin} from '../utils/verifyToken.js'

const router = express.Router()
import { getProducts, getProduct, updateProduct, deleteProduct, createProduct } from '../controllers/products.js'
//CREATE
router.post('/',verifyAdmin, createProduct)
//UPDATE
router.put('/:id',verifyAdmin, updateProduct)
//DELETE
router.delete('/:id',verifyAdmin, deleteProduct)
//GET
router.get('/find/:id', getProduct)
router.get('/', getProducts)
export default router