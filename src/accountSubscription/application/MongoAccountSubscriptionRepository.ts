import { AccountSubscriptionRepository } from "../domain/accountSubscription.repository";

export class MongoAccountSubscriptionRepository implements AccountSubscriptionRepository{
  public find(id: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
}