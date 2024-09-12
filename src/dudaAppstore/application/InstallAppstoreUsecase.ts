import { AccountRepository } from "../../account/domain/account.repository";
import { AccountFinder } from "../../account/domain/accountFinder";
import { AccountSubscriptionRepository } from "../../accountSubscription/domain/accountSubscription.repository";
import { IAppstoreInstallation } from "../domain/appstore";
import { AppstoreRepository } from "../domain/appstore.repository";
// import { Account } from "../../account/domain/account";
import { AccountSubscriptionFinder } from "../../accountSubscription/domain/accountSubscriptionFinder";

export class InstallAppstoreUseCase {
  private accountFinder: AccountFinder
  private subscriptionFinder: AccountSubscriptionFinder

  constructor(
    private appstoreRepository: AppstoreRepository,
    private accountRepository: AccountRepository,
    private subscriptionRepository: AccountSubscriptionRepository
  ) {

    this.accountFinder = new AccountFinder(this.accountRepository)
    this.subscriptionFinder = new AccountSubscriptionFinder(this.subscriptionRepository)
  }

  async run(app: IAppstoreInstallation): Promise<void> {

    const account = await this.accountFinder.run(app.ownerUUID)

    if(account){
      const subscription = await this.subscriptionFinder.run(account.id)
      if(!subscription) throw new Error("subscription not found")

      if(subscription.state === "active" && account.siteName) throw new Error("trying to assign site to an active account")
    }


    // this.accountRepository.createAccount(app) > TK.createAccount > webhook
    // this.accountRepository.updateAccount(sitename) > TK.activateAccount > webhook
    // this.appstoreRepository.activeAccount(accountId)
    // this.appstoreRepository.saveIntegration(app)
    // this.appstoreRepository.emitWebhook(app)
    // this.appstoreRepository.installWidgets(token de integracion de duda)
    // this.appstoreRepository.setLogs(app)

    return

  }

}


//