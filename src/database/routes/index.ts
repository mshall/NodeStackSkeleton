import { Router } from 'express'
import { coffeeMachineRouter } from '../../controllers/coffee-machine.controller'
import { coffeePodRouter } from '../../controllers/coffee-pod.controller';

const appRouter = Router()

appRouter.use('/api/coffee-machine', coffeeMachineRouter);
appRouter.use('/api/coffee-pod', coffeePodRouter);
export default appRouter;