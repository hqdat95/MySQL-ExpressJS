import { join } from 'path';
import express from 'express';

export default (app) => {
  app.set('view engine', 'ejs');
  app.set('views', join(__dirname, '../views'));
  app.use(express.static(join(__dirname, '../public')));
};
