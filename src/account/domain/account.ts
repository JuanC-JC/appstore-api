
export class Account {
  readonly name: string;
  readonly id: string;
  readonly path: string;
  readonly email: string;

  constructor(name: string, id: string, path: string, email: string) {
    this.name = name;
    this.id = id;
    this.path = path;
    this.email = email;
  }

  static fromPrimitives(data: {name: string, id: string, path: string, email: string}): Account {
    return new Account(data.name, data.id, data.path, data.email);
  }

  static toPrimitives(account: Account): any {
    return {
      id: account.id,
      name: account.name,
      path: account.path,
      email: account.email,
    }
  }
}