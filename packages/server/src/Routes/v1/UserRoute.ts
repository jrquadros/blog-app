import * as express from 'express'
import { UserController } from '../../Controllers/UserController'
import { ExtractJWT } from '../../middlewares/ExtractJwt'

const router = express.Router()

router.use(ExtractJWT)
router.route('/').get(UserController.index)

router
  .route('/:id')
  .get(UserController.show)
  .put(UserController.update)
  .delete(UserController.destroy)

export const UserRoute = router
