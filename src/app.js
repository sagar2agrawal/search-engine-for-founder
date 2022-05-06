import Config from "../src/config/index.js";
import express from "express";

import indexRouter from "../src/components/index/index.routes.js";

const app = express();

app.use('/api', indexRouter);
const port = 5000;
app.listen(port, () => {
    console.log('The API server has started on the PORT: ' + port);
});