
export class Account {
  readonly name: string;
  readonly id: string;
  readonly path: string;
  readonly email: string;
  public siteName?: string;

  constructor(name: string, id: string, path: string, email: string, siteName?: string) {
    this.name = name;
    this.id = id;
    this.path = path;
    this.email = email;
    this.siteName = siteName;
  }

  static fromPrimitives(data: {name: string, id: string, path: string, email: string, siteName: string}): Account {
    return new Account(data.name, data.id, data.path, data.email, data.siteName);
  }

  static toPrimitives(account: Account): any {
    return {
      id: account.id,
      name: account.name,
      path: account.path,
      email: account.email,
      siteName: account.siteName
    }
  }
}