import * as express from 'express'
import { UserRoute } from './UserRoute'
import { TodosRoute } from './TodosRoute'

const router = express.Router()

router.use('/users', UserRoute)
router.use('/todos', TodosRoute)

export const Router = router
