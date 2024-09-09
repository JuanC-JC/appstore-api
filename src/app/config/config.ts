
interface IConfig {
  // [key: string]: string;
  port: string;
  dudaAppstoreSecret: string;
  mongoUri: string;

}

export const config: IConfig = {
  port: process.env.PORT || '3000',
  dudaAppstoreSecret: process.env.DUDA_APPSTORE_SECRET || '1234',
  mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/bh',
}