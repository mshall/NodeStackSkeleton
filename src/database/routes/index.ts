import { Router } from 'express'
import { coffeeMachineRouter } from '../../controllers/coffee-machine.controller'

const appRouter = Router()

appRouter.use('/api/cofee-machine', coffeeMachineRouter);
export default appRouter;