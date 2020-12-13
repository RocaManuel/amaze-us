import { App } from './app';
import { createConnection } from 'typeorm';
const config = require('../ormconfig');
import * as dotenv from 'dotenv';

dotenv.config();

const app = new App();
const port = process.env.PORT || 3000

createConnection(config).then(async (_connection) => {
  app.getApp().listen(port, () => {
    console.log('App runing and listen port: ', port);
  });
}).catch(error => console.log(error));