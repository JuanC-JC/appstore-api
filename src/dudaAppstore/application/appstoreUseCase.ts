import { App } from "../domain/appstore.entity";
import { AppstoreRepository } from "../domain/appstore.repository";

export class AppstoreUseCase{
  constructor(private appstoreRepository: AppstoreRepository) {}

  async validateSignature(): Promise<Boolean> {
    return this.appstoreRepository.validateSignature();
  }

  async install(app: App): Promise<void> {
    return this.appstoreRepository.install(app);
  }

  async update(app: App): Promise<void> {
    return this.appstoreRepository.update(app);
  }

}