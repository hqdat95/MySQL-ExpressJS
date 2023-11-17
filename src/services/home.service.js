import logger from '../helpers/winston.helper.js';

class HomeSvc {
  static home = async () => {
    return logger.info('Welcome to Website');
  };
}

export default HomeSvc;
