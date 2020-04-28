import * as express from 'express'
import { PostController } from '../../Controllers/PostController'
import { ExtractJWT } from '../../middlewares/ExtractJwt'

const router = express.Router()

router.use(ExtractJWT)

router.route('/').get(PostController.index).post(PostController.store)

router.route('/:id').get(PostController.show).put(PostController.update).delete(PostController.destroy)

export const PostRoute = router
