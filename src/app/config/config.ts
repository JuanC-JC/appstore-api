
interface IConfig {
  [key: string]: string;
}

export const config: IConfig = {
  port: process.env.PORT || '3000',
}