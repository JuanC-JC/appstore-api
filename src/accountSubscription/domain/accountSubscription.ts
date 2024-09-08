export class AccountSubscription {
  readonly id: string;
  readonly state: string;
  readonly date: Date;

  constructor(id: string, state: string, date: Date) {
    this.id = id;
    this.state = state;
    this.date = date;
  }
}