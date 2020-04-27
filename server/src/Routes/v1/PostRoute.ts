import * as express from 'express'
import { PostController } from '../../Controllers/PostController'

const router = express.Router()

router.route('/').get(PostController.index)

router
  .route('/:id')
  //TODO: MOVE POST TO '/' AND GET USER ID FROM JWT
  .post(PostController.store)
  .get(PostController.show)
  .put(PostController.update)
  .delete(PostController.destroy)

export const PostRoute = router
