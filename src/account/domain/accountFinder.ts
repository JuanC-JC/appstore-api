import { Account } from "./account";
import { AccountRepository } from "./account.repository";

export class AccountFinder {
  constructor(private accountRepository: AccountRepository) {}

  async run(accountId: string): Promise<Account> {
    const account = await this.accountRepository.find(accountId);
    if(!account) throw new Error("Account not found");
    return account
  }
}