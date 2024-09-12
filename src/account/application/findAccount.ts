
import { AccountRepository } from "../domain/account.repository";
import { Account } from "../domain/account";
import { Nullable } from "../../shared/domain/Nullable";
import { AccountFinder } from "../domain/accountFinder";

export class FindAccount {
  private finder: AccountFinder
  constructor(private readonly cualquierImplementacionAccountRepository: AccountRepository) {
    this.finder = new AccountFinder(cualquierImplementacionAccountRepository)
  }

  async run(id: string): Promise<Nullable<Account>> {
    return this.finder.run(id)
  }
}