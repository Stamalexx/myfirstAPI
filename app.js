import express from 'express';
import {mainpage, genres} from './src/Get.js';

const PORT = process.env.PORT || 3000;
const app = express();

mainpage(app);
genres(app);







app.listen(PORT, () => console.log('Listening on port ' + PORT))