import Redis from 'ioredis';
import config from '../configs/redis.config';
import logger from '../helpers/winston.helper';

const { HOST, PORT, PASSWORD, DATABASE } = config;

const redis = new Redis({
  host: HOST,
  port: PORT,
  password: PASSWORD,
  db: DATABASE,
});

redis.on('ready', () => {
  logger.info('Server is connection to Redis');
});

redis.on('error', (err) => {
  logger.error('Error connecting to Redis:', err);
});

export default redis;
