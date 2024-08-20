
interface IConfig {
  [key: string]: string;
}

export const config: IConfig = {
  port: process.env.PORT || '3000',
  dudaAppstoreSecret: process.env.DUDA_APPSTORE_SECRET || '1234',
}