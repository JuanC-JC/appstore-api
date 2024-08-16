import { Router } from 'express';
import { HealthController } from './healthController';

const healthRouter = Router();
const healthController = new HealthController();

// healthRouter.get('/', (_req, res) => res.json({ message: 'Hello World' }));
healthRouter.get('/', healthController.run.bind(healthController) )


export { healthRouter };