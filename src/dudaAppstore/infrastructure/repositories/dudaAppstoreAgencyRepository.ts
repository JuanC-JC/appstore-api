// import { App } from "../../domain/createAppRequest";
import { AppstoreRepository } from "../../domain/appstore.repository";


export class DudaAppstoreRepository implements AppstoreRepository {
  async createAccount(data: any): Promise<any> {

    // const isCreating = data.accountData ? true : false;
    // const isAssigning = data.reassing?.oldSite || data?.reassing?.accountId

    //base params 
      // siteName 
      // plan
      // lang
      // ownerUUID
      // authentication
        // authToken
        // refrestToken
        // expirationDate

      // for create account
        // accountData
          // email
          // name
          // ismulticenter
          // businessType
          // password
          // externalUuid

      // for reassign account 
        //reassing
          // oldSite > transfer account from x site to newSite
          // idBHAccount
          // can find account
  }

  async findAccount(id: string): Promise<void> {
    
  }

  async findAccountSubscription(id: string): Promise<void> {
    
  }

  async activeAccount(id: string): Promise<void> { }

  async updateAccount(data: any): Promise<void> { }

  async saveIntegration(data: any): Promise<void> { }

  async installWidgets(data: any): Promise<void> { }

  async setLogs(data: any): Promise<void> { }
  
}
