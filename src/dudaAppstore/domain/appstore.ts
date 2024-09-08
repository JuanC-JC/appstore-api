export interface IAppstoreInstallation{
  siteName: string;
  plan: string;
  lang: string;
  ownerUUID: string;
  accountData?: AccountData;
  reassingData?: ReassignData;
  authentication: Authentication
}

interface AccountData {
  email: string;
  name: string;
  isMulticenter: string;
  businessType: string;
  password: string;
  externalUuid: string;
}


interface ReassignData {
  // oldSite: string;
  accountId: string;
}

interface Authentication {
  type: string;
  authToken: string;
  refreshToken: string;
  expirationDate: number;
} 