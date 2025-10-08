import express from 'express';
import {getMainPage, getGenres} from './src/Get.js';

const PORT = process.env.PORT || 3000;
const app = express();

getMainPage(app);
getGenres(app);







app.listen(PORT, () => console.log('Listening on port ' + PORT))