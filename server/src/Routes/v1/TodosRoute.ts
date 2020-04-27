import * as express from 'express'
import { TodoController } from '../../Controllers/TodoController'

const router = express.Router()

router.route('/').post(TodoController.store).get(TodoController.index)

router
  .route('/:id')
  .get(TodoController.show)
  .put(TodoController.update)
  .delete(TodoController.destroy)

export const TodosRoute = router
