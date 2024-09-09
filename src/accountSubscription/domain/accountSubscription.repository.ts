import { Nullable } from "../../shared/domain/Nullable";
import { AccountSubscription } from "./accountSubscription";

export interface AccountSubscriptionRepository{
  find(id:string): Promise<Nullable<AccountSubscription>>;
}