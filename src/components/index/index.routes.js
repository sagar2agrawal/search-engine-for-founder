import Router from 'express';

import botQueryRouter from "../bot-query/bot-query.routes.js";

const indexRouter = Router();

indexRouter.use('/bot', botQueryRouter);

export default indexRouter;