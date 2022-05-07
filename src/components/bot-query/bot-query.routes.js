import Router from 'express';
import {facebookVerification, facebookWebhook } from './bot-query.controllers.js';
const botQueryRouter = new Router();

botQueryRouter.get('/', (req, res) => { 
    res.send("Hey");
});

botQueryRouter.post('/facebook/webhook', facebookWebhook);
botQueryRouter.get('/facebook-verification/webhook', facebookVerification);

export default botQueryRouter;
