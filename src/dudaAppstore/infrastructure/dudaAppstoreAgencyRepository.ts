import { App } from "../domain/appstore.entity";
import { AppstoreRepository } from "../domain/appstore.repository";


export class DudaAppstoreAgencyRepository implements AppstoreRepository {
  async install(data: App): Promise<any> {
    console.log('installing app', data);
  }
}