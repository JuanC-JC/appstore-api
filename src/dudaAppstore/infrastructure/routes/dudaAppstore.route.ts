import express from 'express';
import { DudaAppstoreRepository } from '../repositories/dudaAppstoreAgencyRepository';
import { InstallAppstoreUseCase } from '../../application/InstallAppstoreUsecase';
import { InstallAppstoreController } from '../controllers/installAppstore.controller';
import { MongoAccountRepository } from '../../../account/infrastructure/MongoAccountRepository';
import { MongoAccountSubscriptionRepository } from '../../../accountSubscription/infrastructure/MongoAccountSubscriptionRepository';

const dudaAppstoreRouter = express.Router()

const agencyRepository = new DudaAppstoreRepository()
const accountRepository = new MongoAccountRepository()
const subscriptionRepository = new MongoAccountSubscriptionRepository()


const adapter = new InstallAppstoreUseCase(agencyRepository, accountRepository, subscriptionRepository)
const controller = new InstallAppstoreController(adapter)


dudaAppstoreRouter.post('/appstore/install', (req, res) => controller.run(req, res) )


export { dudaAppstoreRouter };