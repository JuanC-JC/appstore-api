import { AccountSubscription } from "./accountSubscription";

export interface AccountSubscriptionRepository{
  find(id:string): Promise<AccountSubscription>;
}