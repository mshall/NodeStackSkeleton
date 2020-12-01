import { app } from './server';

import * as http from 'http';
import { sequelize } from './util/database/database';
const PORT = 4000;
const server = http.createServer(app);
server.listen(PORT);