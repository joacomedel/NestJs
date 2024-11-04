import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    let DB_HOST = process.env.DB_HOST;
    let DB_PORT = process.env.DB_PORT;
    let DB_USER = process.env.DB_USER;
    let DB_NAME = process.env.DB_NAME;
    let DB_PASSWORD = process.env.DB_PASSWORD;

    return 'DB_HOST: ' + DB_HOST + " DB_PORT: " + DB_PORT + " DB_USER: " + DB_USER + " DB_NAME: " + DB_NAME + " DB_PASSWORD: " + DB_PASSWORD;
  }
}
