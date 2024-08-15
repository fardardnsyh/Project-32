import express from 'express'
import {
	createJob,
	getAllJobs,
	updateJob,
	deleteJob,
	showStats,
} from '../controllers/jobsController.js'

const router = express.Router()

// routes
router.route('/new').post(createJob)
router.route('/').get(getAllJobs)
router.route('/stats').get(showStats)
router.route('/del/:id').delete(deleteJob)
router.route('/patch/:id').patch(updateJob)

export default router
