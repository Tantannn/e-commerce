import express from 'express'
const router = express.Router()
import { getUsers, getUser, updateUser, deleteUser } from '../controllers/users.js'
//UPDATE
router.put('/:id', updateUser)
//DELETE
router.delete('/:id', deleteUser)
//GET
router.get('/find/:id', getUser)
router.get('/', getUsers)
export default router