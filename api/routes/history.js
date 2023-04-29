import express from 'express'
import {verifyAdmin} from '../utils/verifyToken.js'

const router = express.Router()
import { getAllHistory, getHistory, updateHistory, deleteHistory, createHistory } from '../controllers/history.js'
//CREATE
router.post('/', createHistory)
//UPDATE
router.put('/:id',updateHistory)
//DELETE
router.delete('/:id', verifyAdmin, deleteHistory)
//GET
router.get('/find/:id', getHistory)
router.get('/',verifyAdmin, getAllHistory)
export default router