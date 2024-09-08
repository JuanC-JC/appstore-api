export interface AccountRepository{
  create(data:any): Promise<any>;
  find(id:string): Promise<any>;
  findSubscription(id: string): Promise<any>;
}