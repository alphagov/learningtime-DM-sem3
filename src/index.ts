import express from 'express';
import * as nunjucks from 'nunjucks';
import * as path from 'path';
import indexRouter from './routes/index';

const app = express();

const viewPath = path.join(__dirname, 'views');

nunjucks.configure(viewPath, {
    autoescape: true,
    express: app
});
app.set('view engine', 'html');

app.use(express.static('src/public'));

app.use('/', indexRouter);

export default app;
