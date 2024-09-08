import { Request } from 'express';
import { IncomingHttpHeaders } from 'http';

export interface IReqCustom<TBody, THeader> extends Request {
  body: TBody;
  headers: IncomingHttpHeaders & THeader;
}