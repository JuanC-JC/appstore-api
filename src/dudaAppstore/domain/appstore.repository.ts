// import { App } from "./createAppRequest";

export interface AppstoreRepository {
  createAccount(data:any): Promise<any>;
  findAccount(id:string): Promise<any>;
  findAccountSubscription(id:string): Promise<any>;
  activeAccount(id:string): Promise<any>;
  updateAccount(data:any): Promise<any>;
  saveIntegration(data:any): Promise<any>;
  installWidgets(data:any): Promise<any>;
  setLogs(data:any): Promise<any>;
  // sendWebhook(data:any): Promise<any>;
  // assignAccount(app:App): Promise<void>;
  // uninstallAccount(app:App): Promise<void>;
  // updateAccount(app:App): Promise<void>;
}



//account context
  //create
  //update
  //remove
  //find
  //etc...



//create account if from outside
  //internal implementation?
  //external implementation?