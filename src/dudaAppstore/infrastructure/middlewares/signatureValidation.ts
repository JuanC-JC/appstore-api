import crypto from "crypto"
import { NextFunction, Request, Response } from "express"
import { StatusCodes } from "http-status-codes";
import { config } from "../../../app/config/config";

export function dudaAppstoreAuthentication(request: Request, response: Response, next: NextFunction) {
  const signature = request.headers['x-duda-signature'];
  const time = request.headers['x-duda-signature-timestamp'];
  const body = JSON.stringify(request.body);

  if(!signature || !time ) {
    response.status(StatusCodes.UNAUTHORIZED).send('Unauthorized');
  }

  const secret = config.dudaAppstoreSecret;
  const decode = Buffer.from(secret, 'base64').toString('utf-8');

  const hash = crypto.createHmac('sha256', decode)
    .update(time + body)
    .digest('base64');

  if(hash !== signature) {
    response.status(StatusCodes.UNAUTHORIZED).send('Unauthorized');
  }

  next();
}