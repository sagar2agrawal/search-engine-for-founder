import Router from 'express';

const botQueryRouter = new Router();

botQueryRouter.get('/', (req, res) => { 
    res.send("HEy");
})

export default botQueryRouter;
