import { Response, Request } from "express";
import { InstallAppstoreUseCase } from "../../application/InstallAppstoreUsecase";
import { StatusCodes } from "http-status-codes";
import { InstallAppstoreRequest } from "./installAppstoreRequest";
import { IReqCustom } from "../../../shared/controllers/requestCustom";
import { IAppstoreInstallation } from "../../domain/appstore";


export class appstoreController{
  constructor(private installAppstore: InstallAppstoreUseCase) {}

  async run(request: IReqCustom<InstallAppstoreRequest,{}>, response: Response) {

    try{
      console.log(request.body)

      // const signature = request.headers['x-duda-signature'];
      // const time = request.headers['x-duda-signature-timestamp'];
      const body = request.body;
  
      //validate signature previous middleware
  
      // if(!body || !body.email) response.status(400).send('Bad Request');
      //from outside is a DTO? and then pass to a mapper?
      // const data: App = {
      //   email: body.email,
      //   name: body.name
      // }
      //body example
      // {
      //   "auth": {
      //     "type": "bearer",
      //     "authorization_code": "XXX-XXXXX-XXXXX",
      //     "refresh_token": "YYY-YYYYY-YYYYY",
      //     "expiration_date": 1554254560438
      //   },
      //   "api_endpoint": "https://api-sandbox.duda.co",
      //   "installer_account_uuid": "10",
      //   "account_owner_uuid": "12",
      //   "user_lang": "en",
      //   "app_plan_uuid": "332653a3-df51-45ce-a873-fbb0b1ccb49f",
      //   "recurrency": "MONTHLY",
      //   "site_name": "1501ccca016a4220861ef07fe2c8eb0d",
      //   "free": true,
      //   "configuration_data": "{object}"
      // }
  
      const configurationData = JSON.parse(body.configuration_data || '{}');
  
      //TODO DTO to entity
      const data:IAppstoreInstallation = {
        siteName: body.site_name,
        plan: body.app_plan_uuid,
        lang: body.user_lang,
        ownerUUID: body.account_owner_uuid,
        authentication: {
          type: body.auth?.type,
          authToken: body.auth?.authorization_code,
          refreshToken: body.auth?.refresh_token,
          expirationDate: body.auth?.expiration_date
        },
        accountData: {
          email: configurationData.email,
          name: configurationData.name,
          isMulticenter: configurationData.ismulticenter,
          businessType: configurationData.businessType,
          password: configurationData.password,
          externalUuid: configurationData.externalUuid
        },
        reassingData: {
          accountId: configurationData?.accountId
        }
      }
  
      const app = await this.installAppstore.run(data);
  
      response.status(StatusCodes.OK).send(data);
    }catch(error){
      console.log("error on run appstoreController", error)
      response.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
    }
  }
}
