import express from 'express';
import { DudaAppstoreRepository } from '../repositories/dudaAppstoreAgencyRepository';
import { InstallAppstoreUseCase } from '../../application/InstallAppstoreUsecase';
import { appstoreController } from '../controllers/installAppstore.controller';
import { MongoAccountRepository } from '../../../account/application/MongoAccountRepository';
import { MongoAccountSubscriptionRepository } from '../../../accountSubscription/application/MongoAccountSubscriptionRepository';

const dudaAppstoreRouter = express.Router()



//contexto account
// microserviceInternalAccountRepository()
// lambdaAccount
//const adapter = usecase account(repository){ create > implementacion / bd }



const agencyRepository = new DudaAppstoreRepository()
const accountRepository = new MongoAccountRepository()
const subscriptionRepository = new MongoAccountSubscriptionRepository()
const adapter = new InstallAppstoreUseCase(agencyRepository, accountRepository, subscriptionRepository)
const controller = new appstoreController(adapter)


dudaAppstoreRouter.post('/appstore/install', controller.run.bind(controller) )


export { dudaAppstoreRouter };