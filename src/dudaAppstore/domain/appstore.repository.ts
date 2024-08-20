import { App } from "./appstore.entity";

export interface AppstoreRepository {
  install(app:App): Promise<void>;
  // uninstall(app: App): Promise<void>;
  // update(app: App): Promise<void>;
}