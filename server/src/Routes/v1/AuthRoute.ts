import * as express from 'express'
import { AuthController } from '../../Controllers/AuthController'
import { ExtractJWT } from '../../middlewares/ExtractJwt'

const router = express.Router()

router.route('/login').post(AuthController.authenticate)
router.route('/register').post(AuthController.store)

router.get('/me', AuthController.currentUser).use(ExtractJWT)

export const AuthRoute = router
