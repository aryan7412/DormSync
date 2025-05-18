import { Router } from 'express'
import { signupUser } from '../controllers/signup.controller.js'

const router = Router()

router.route('/register').post(signupUser)

export default router