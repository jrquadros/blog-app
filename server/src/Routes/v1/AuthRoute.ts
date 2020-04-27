import * as express from 'express'
import { AuthController } from '../../Controllers/AuthController'
//import { ExtractJWT } from '../../middlewares/ExtractJwt'

const router = express.Router()

router.route('/').post(AuthController.authenticate)

//router.use(ExtractJWT)

export const AuthRoute = router
