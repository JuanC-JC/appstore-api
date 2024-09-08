export interface InstallAppstoreRequest {
  site_name: string;
  app_plan_uuid: string;
  user_lang: string;
  account_owner_uuid: string;
  auth: AppstoreAuthenticationRequest
  configuration_data: string;
}

interface AppstoreAuthenticationRequest{
  type: string;
  authorization_code: string;
  refresh_token: string;
  expiration_date: number;
}


interface AppstoreAuthenticationRequest {
  type: string;
  authToken: string;
  refreshToken: string;
  expirationDate: string;
}