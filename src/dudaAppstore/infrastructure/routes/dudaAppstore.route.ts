import express from 'express';
// import { AppstoreController } from '../controllers/appstore.controller';
// import { AppstoreUseCase } from '../../application/appstoreUseCase';
// import { DudaAppstoreAgencyRepository } from '../dudaAppstoreAgencyRepository';

const dudaAppstoreRouter = express.Router()
// const appstoreRepository = new DudaAppstoreAgencyRepository();
// const useCases = new AppstoreUseCase(appstoreRepository)
// // const controller = new AppstoreController(useCases);
// // const healthController = new HealthController();

dudaAppstoreRouter.get('/appstore', (_req, res) => res.json({ message: 'Hello World' }));
// dudaAppstoreRouter.post('/appstore', controller.install.bind(controller) )


export { dudaAppstoreRouter };