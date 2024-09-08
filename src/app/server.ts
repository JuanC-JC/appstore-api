import express from 'express';
import * as http from 'http'
import cors from 'cors'
import morgan from "morgan"

export class Server {
  private readonly app: express.Application;
  private readonly port: string;
  private server?: http.Server;

  constructor({ port, routes }: { port: string, routes: express.Router[] }) {
    this.app = express();
    this.port = port;
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors())
    routes.forEach((route) => this.app.use(route));
    this.app.use(morgan("dev"))
  }

  async start(): Promise<void> {
    return new Promise((resolve) => {
      this.server = this.app.listen(this.port, () => {
        console.log(`Server is running on port ${this.port}`);
        resolve();
      });
    });
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.server) {
        this.server.close((err) => {
          if (err) {
            return reject(err);
          } else {
            return resolve();
          }
        });
      } else {
        return resolve();
      }
    });
  }
}