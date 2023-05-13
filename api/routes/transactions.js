import express from 'express'
import {verifyAdmin} from '../utils/verifyToken.js'
const router = express.Router()

import { getTransactions, getTransaction, updateTransaction, deleteTransaction, createTransaction , postOrder} from '../controllers/transactions.js'
//CREATE
router.post('/', createTransaction)
router.post('/email', postOrder)
//UPDATE
router.put('/:id', verifyAdmin, updateTransaction)
//DELETE
router.delete('', verifyAdmin, deleteTransaction)
//GET
router.get('/find/:id', getTransaction)
router.get('/', getTransactions)
export default router