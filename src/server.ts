import dotenv from 'dotenv'
dotenv.config();
import app from './index'
import * as config from './config'

app.listen(config.PORT, () => {
    console.log(`Server is running http://localhost:${config.PORT}/index`);
  });