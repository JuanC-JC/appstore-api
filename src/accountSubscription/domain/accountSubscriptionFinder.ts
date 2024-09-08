import { AccountRepository } from "../../account/domain/account.repository";
import { AccountSubscription } from "./accountSubscription";

export class AccountSubscriptionFinder {
  constructor(private accountRepository: AccountRepository) {}

  async run(accountId: string): Promise<AccountSubscription> {
    const susbcription = await this.accountRepository.findSubscription(accountId);
    if(susbcription === null) throw new Error("Account not found");
    return susbcription
  }
}