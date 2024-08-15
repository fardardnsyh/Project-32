import express from 'express'
import { getAllUsers, deleteUser } from '../controllers/adminController.js'

const router = express.Router()

router.route('/').get(getAllUsers)
router.route('/:id').delete(deleteUser)

export default router
