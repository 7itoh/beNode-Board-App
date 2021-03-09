import connectdb from 'mysql'
import dotENV from 'dotenv'

dotENV.config();

const db = connectdb.createConnection({
    host: process.env.ENV_DB_HOST,
    user: process.env.ENV_DB_USER,
    password: process.env.ENV_DB_PASS,
    port: 13306,
    database: process.env.ENV_DB_NAME,
});

db.connect((err) => {
    if (err) {
        console.log('error');
    } else {
        console.log('success');
    }
})