import path from 'path';
import { addPath } from 'app-module-path';
import chalk from 'chalk';
import http from 'http';
import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line global-require
    dotenv.config();
}

addPath(path.join(__dirname, '../server'));

const app = require('../server/app'); // The express app we just created
const port = parseInt(process.env.PORT, 10) || 3000;

app.set('port', port);

const server = http.createServer(app);

app.listen(app.get('port'), () => {
    console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'));
    console.log('  Press CTRL-C to stop\n');
});
