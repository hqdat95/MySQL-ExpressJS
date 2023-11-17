import { createLogger, format, transports, addColors } from 'winston';

export default (() => {
  const levels = { error: 0, warn: 1, debug: 2, info: 3 };
  const colors = { error: 'red', warn: 'yellow', debug: 'blue', info: 'green' };

  addColors(colors);

  return createLogger({
    levels,
    format: format.combine(
      format.colorize({ level: true, message: false }),
      format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss.SSS',
      }),
      format.printf(({ level, message, timestamp }) => `${timestamp} [${level}]: ${message}`),
    ),
    transports: [new transports.Console()],
  });
})();
