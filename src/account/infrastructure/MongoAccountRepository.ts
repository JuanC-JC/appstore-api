import { Nullable } from "../../shared/domain/Nullable";
import { Account } from "../domain/account";
import { AccountRepository } from "../domain/account.repository";
import BHAccount from "../../common/model/BHAccount";

export class MongoAccountRepository implements AccountRepository {

  constructor() {}

  async find(id: string): Promise<Nullable<Account>> {
    const collection = BHAccount.model();
    const account = await collection.findById({ _id: id }).lean().exec();

    if (account) {
      return Account.fromPrimitives({
        name: account.name || '',
        id: id,
        path: account.path || '',
        email: account.email || '',
        siteName: account.siteName || '',
      });
    }

    return null;
  }
}