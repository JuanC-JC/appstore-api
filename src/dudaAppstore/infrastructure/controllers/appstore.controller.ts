import { Response, Request } from "express";
import { AppstoreUseCase } from "../../application/appstoreUseCase";
import { IncomingHttpHeaders } from 'http';
import { App } from "../../domain/appstore.entity";


interface IBody {
  email: string;
  name: string;
}

interface IReqCustom<TBody, THeader> extends Request {
  body: TBody;
  headers: IncomingHttpHeaders & THeader;
}

export class appstoreController{
  constructor(private appstoreuseCase: AppstoreUseCase) {}

  async install(request: IReqCustom<IBody, Request>, response: Response) {

    const signature = request.headers['x-duda-signature'];
    const time = request.headers['x-duda-signature-timestamp'];
    const body = request.body;

    //validate signature previous middleware

    if(!body || !body.email) response.status(400).send('Bad Request');
    //from outside is a DTO? and then pass to a mapper?
    const data: App = {
      email: body.email,
      name: body.name
    }
    const app = await this.appstoreuseCase.install(data);
  }
}
