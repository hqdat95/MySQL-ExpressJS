import app from './src/app';
import config from './src/configs/app.config';
import logger from './src/helpers/winston.helper';

const { APP_PORT, APP_HOST } = config;

app.listen(APP_PORT, APP_HOST, () => {
  try {
    logger.info(`Server is running at http://${APP_HOST}:${APP_PORT}`);
  } catch (err) {
    logger.error('Error occurred while starting the server:', err);
  }
});
