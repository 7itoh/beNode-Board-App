import express from 'express'
import bodyParser from 'body-parser'
import dotENV from 'dotenv'
import router from './route/index'

dotENV.config();
const port = process.env.ENV_PORT;

const app = express();

app
    .set('view engine', 'ejs')
    .set('views', './src/views')

app
    .use(express.static('dist/public'))
    .use('/', router)
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json());

app.listen(port, () => {
    console.log(`Listening Port_Num: ${port}`);
})