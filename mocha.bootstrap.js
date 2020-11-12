import { addPath } from 'app-module-path';
import path from 'path';
import supertest from 'supertest';
import chai, { assert, expect, should } from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);

addPath(path.join(process.env.PWD, 'server'));
addPath(path.join(process.env.PWD, 'test'));

if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line global-require
    const dotenv = require('dotenv');
    dotenv.config();
}

global.assert = assert;
global.expect = expect;
global.request = supertest;
global.should = should;
global.app = require('./server/app.js');
