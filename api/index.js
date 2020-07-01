import { httpConfig, mongoConfig } from './config';
import { createServer } from './services/express';
import { createMongo } from './services/mongo';
import routes from './routes';

createServer(httpConfig, routes);
createMongo(mongoConfig);