import express from 'express';
import db from './config/database.config';
import subdivisionRouter from './route/subdivision';

db.sync().then(() => {
    console.log('connected to db');
});

const app = express();
const port = 9000;

app.use(express.json());
app.use("/api/v1/subdivision", subdivisionRouter);



app.listen(port, () => {
    console.log(`Server is running on Port: ${port}`)
});