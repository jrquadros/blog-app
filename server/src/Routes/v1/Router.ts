import * as express from 'express'
import { UserRoute } from './UserRoute'
import { PostRoute } from './PostRoute'
import { AuthRoute } from './AuthRoute'

const router = express.Router()

router.use('/users', UserRoute)
router.use('/posts', PostRoute)
router.use('/login', AuthRoute)

export const Router = router
