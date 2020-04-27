import * as express from 'express'
import { UserRoute } from './UserRoute'
import { PostRoute } from './PostRoute'

const router = express.Router()

router.use('/users', UserRoute)
router.use('/posts', PostRoute)

export const Router = router
