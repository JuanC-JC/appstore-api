import { Nullable } from "../../shared/domain/Nullable";
import { Account } from "./account";

export interface AccountRepository{
  find(id:string): Promise<Nullable<Account>>;
}