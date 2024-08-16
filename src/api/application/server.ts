import express from 'express';
import * as http from 'http'
import cors from 'cors'

export class Server {
  private readonly app: express.Application;
  private readonly port: string;
  private server?: http.Server;

  constructor(port: string) {
    this.app = express();
    this.port = port;
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use((_req, res, next) => { //CORS
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      next();
    });
    // this.app.use(routes)
  }

  async listen(): Promise<void> {
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