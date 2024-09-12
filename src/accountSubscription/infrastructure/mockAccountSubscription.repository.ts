import { Nullable } from "../../shared/domain/Nullable";
import { AccountSubscription } from "../domain/accountSubscription";
import { AccountSubscriptionRepository } from "../domain/accountSubscription.repository";

export class MockAccountSubscriptionRepository implements AccountSubscriptionRepository {
  private accountSubscriptions: AccountSubscription[] = [
    new AccountSubscription("1", "active", new Date("2023-01-01"), "BH001"),
    new AccountSubscription("2", "inactive", new Date("2023-02-15"), "BH002"),
    new AccountSubscription("3", "pending", new Date("2023-03-30"), "BH003"),
  ];

  async find(id: string): Promise<Nullable<AccountSubscription>> {
    const accountSubscription = this.accountSubscriptions.find(sub => sub.id === id);
    return accountSubscription || null;
  }
}