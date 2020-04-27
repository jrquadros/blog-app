import * as express from 'express'
import { UserController } from '../../Controllers/UserController'

const router = express.Router()

router.route('/').post(UserController.store).get(UserController.index)

router
  .route('/:id')
  .get(UserController.show)
  .put(UserController.update)
  .delete(UserController.destroy)

export const UserRoute = router
