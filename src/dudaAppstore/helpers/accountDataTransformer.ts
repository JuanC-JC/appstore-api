import { IAppstoreInstallation } from "../domain/appstore";

export interface AccountCreationData {
  email: string;
  password: string;
  businessName: string;
  type: string;
  country: string;
  locale: string;
  idTimkotPlan?: string;
  created: {
    ip: string;
    origin: string;
    createBy: {
      _id: string;
      [key: string]: any;
    };
  };
  API_SECRET: string;
  additionalData?: {
    [key: string]: any;
  };
}

export function transformAppstoreDataToAccountData(app: IAppstoreInstallation, apiSecret: string): AccountCreationData {
  return {
    email: app.email,
    password: app.password,
    businessName: app.businessName,
    type: app.type || 'default',
    country: app.country || 'default',
    locale: app.locale || 'en',
    idTimkotPlan: app.idTimkotPlan,
    created: {
      ip: app.ip || '',
      origin: app.origin || 'appstore',
      createBy: {
        _id: app.createdBy || '',
      },
    },
    API_SECRET: apiSecret,
    additionalData: app.additionalData,
  };
}