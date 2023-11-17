import 'dotenv/config';

import cors from 'cors';
import helmet from 'helmet';
import express from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';

import db from './models';
import apiRoutes from './routes/api';
import homeRoutes from './routes/home';
import config from './configs/auth.config';
import viewEngine from './configs/view.config';

import notFound from './middlewares/404.middleware';
import morgan from './middlewares/morgan.middleware';
import session from './middlewares/session.middleware';
import response from './middlewares/response.middleware';
import errorHandler from './middlewares/error.middleware';

const app = express();

db.connectDB();
viewEngine(app);

app.use(cors());
app.use(morgan());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(cookieParser(config.SECRET.COOKIE));
app.use(express.urlencoded({ extended: true }));

app.use(session);
app.use(response);

app.use('/', homeRoutes);
app.use('/v1/api', apiRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
