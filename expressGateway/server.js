import * as path from 'path';
import * as gateway from 'express-gateway';

gateway()
  .load(path.join(__dirname, 'config'))
  .run();
