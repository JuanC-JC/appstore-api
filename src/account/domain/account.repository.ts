import { Nullable } from "../../shared/domain/Nullable";
import { Account } from "./account";

export interface AccountRepository{
  create(data:any): Promise<Nullable<Account>>;
  find(id:string): Promise<Nullable<Account>>;
}