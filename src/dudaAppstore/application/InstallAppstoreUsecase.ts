import { AccountRepository } from "../../account/domain/account.repository";
import { AccountSubscriptionRepository } from "../../accountSubscription/domain/accountSubscription.repository";
import { IAppstoreInstallation } from "../domain/appstore";
import { AppstoreRepository } from "../domain/appstore.repository";

export class InstallAppstoreUseCase {
  constructor(
    private appstoreRepository: AppstoreRepository,
    private accountRepository: AccountRepository,
    private subscriptionRepository: AccountSubscriptionRepository
  ) { }

  async run(app: IAppstoreInstallation): Promise<void> {

    //if send reassignData is assign
    const accountId = app.reassingData?.accountId

    if (accountId) {

      const account = await this.accountRepository.find(accountId)
      const subscription = await this.subscriptionRepository.find(accountId)

      if (subscription.state === "active" && account.siteName) throw new Error("trying to assign site to an active account")

      //quien devuelve el error aca?
      // this.appstoreRepository.activeAccount(accountId)
      // this.appstoreRepository.updateAccount(app)
      // this.appstoreRepository.saveIntegration(app)
      // this.appstoreRepository.installWidgets(app)
      // this.appstoreRepository.setLogs(app)

      return

    }


    // const newAccount = this.appstoreRepository.createAccount(app)
    // this.appstoreRepository.saveIntegration(app)
    // this.appstoreRepository.installWidgets(app)
    // //custom functions
    // this.appstoreRepository.setLogs(app)

    return

  }

}