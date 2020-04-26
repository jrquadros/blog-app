import * as express from 'express'

import { UserController } from './Controllers/UserController'

const router = express.Router()

router.get('/users', UserController.index)
router.post('/users', UserController.store)
router.get('/users/:id', UserController.show)
router.put('/users/:id', UserController.update)
router.delete('/users/:id', UserController.destroy)

export const Routes = router
