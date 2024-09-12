import { Response, Request } from "express";
import { InstallAppstoreUseCase } from "../../application/InstallAppstoreUsecase";
import { StatusCodes } from "http-status-codes";
import { InstallAppstoreRequest } from "./installAppstoreRequest";
import { IReqCustom } from "../../../shared/controllers/requestCustom";
import { IAppstoreInstallation } from "../../domain/appstore";

export class InstallAppstoreController{
  constructor(private installAppstore: InstallAppstoreUseCase) {}

  async run(request: IReqCustom<InstallAppstoreRequest,{}>, response: Response) {

    try{
      console.log(request.body)
      const body = request.body;

      const configurationData = JSON.parse(body.configuration_data || '{}');
  
      //TODO DTO to entity
      const data:IAppstoreInstallation = {
        siteName: body.site_name,
        plan: body.app_plan_uuid,
        lang: body.user_lang,
        ownerUUID: body.account_owner_uuid, //IDENTIFICADOR DE LA CUENTA EN DUDA (manifest.id duda beedigital) > manifest.ownerDudaId
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
