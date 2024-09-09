export class AccountSubscription {
  readonly id: string;
  readonly state: string;
  readonly date: Date;
  readonly _idBHAccount: string;

  constructor(id: string, state: string, date: Date, _idBHAccount: string) {
    this.id = id;
    this.state = state;
    this.date = date;
    this._idBHAccount = _idBHAccount;
  }

  static fromPrimitives(data: {id: string, state: string, date: Date, _idBHAccount: string}): AccountSubscription {
    return new AccountSubscription(data.id, data.state, data.date, data._idBHAccount);
  }

  static toPrimitives(accountSubscription: AccountSubscription): any {
    return {
      id: accountSubscription.id,
      _idBHAccount: accountSubscription._idBHAccount,
      state: accountSubscription.state,
      date: accountSubscription.date,
    }
  }
}