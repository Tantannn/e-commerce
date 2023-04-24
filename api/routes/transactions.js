import express from 'express'
const router = express.Router()
import { getTransactions, getTransaction, updateTransaction, deleteTransaction } from '../controllers/transactions.js'
//CREATE
router.post('/', updateTransaction)
//UPDATE
router.put('/:id', updateTransaction)
//DELETE
router.delete('/:id', deleteTransaction)
//GET
router.get('/find/:id', getTransaction)
router.get('/', getTransactions)
export default router