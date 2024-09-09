import { AccountSubscription } from "./accountSubscription";
import { AccountSubscriptionRepository } from "./accountSubscription.repository";

export class AccountSubscriptionFinder {
  constructor(private accountSubscriptionRepository: AccountSubscriptionRepository) {}

  async run(accountId: string): Promise<AccountSubscription> {
    const subscription = await this.accountSubscriptionRepository.find(accountId);
    if(!subscription) throw new Error("Account not found");
    return subscription
  }
}