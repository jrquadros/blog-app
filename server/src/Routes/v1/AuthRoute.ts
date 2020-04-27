import * as express from 'express'
import { AuthController } from '../../Controllers/AuthController'

const router = express.Router()

router.route('/login').post(AuthController.authenticate)
router.route('/register').post(AuthController.store)

export const AuthRoute = router
