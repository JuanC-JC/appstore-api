import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export class HealthController {
  run(_req: Request, res: Response) {
    console.log("execution of this")
    console.log(this)
    res.status(StatusCodes.OK).send({ message: "Hello World" });
  }
}