import express from 'express'
const router = express.Router()
import { getUsers } from '../controllers/users.js'
//CREATE
router.post('/:id', getUsers)
//UPDATE
router.put('/:id', getUsers)
//DELETE
router.delete('/:id', getUsers)
//GET
router.get('/find/:id', getUsers)
router.get('/', getUsers)
export default router