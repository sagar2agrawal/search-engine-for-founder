import dotenv from 'dotenv'
dotenv.config()

import production from './production.js';
import development from './development.js';

const Config = "dev" === process.env.NODE_ENV ? development : production;

export default Config;