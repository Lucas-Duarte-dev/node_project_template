import {Router} from "express";

const routes = Router();

routes.get('/customer', (req, res) => {
    return res.status(200).json({"ok": "Hello World"});
});

export {routes};