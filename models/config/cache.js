import * as NodeCache from 'node-cache';

const NodeCache = ('node-cache').default;
const myCache = new NodeCache({ stdTTL: 100, checkperiod: 120 });
const app = express();

module.exports = app;