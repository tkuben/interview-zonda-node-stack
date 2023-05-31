import express from "express";
import subdivisionRouter from './route/subdivision';

const app = express();

app.use(express.json());

app.use("/api/v1/subdivision", subdivisionRouter);

export default app;
