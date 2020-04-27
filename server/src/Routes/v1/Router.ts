import * as express from 'express'
import { UserRoute } from './UserRoute'

const router = express.Router()

router.use('/users', UserRoute)

export const Router = router
