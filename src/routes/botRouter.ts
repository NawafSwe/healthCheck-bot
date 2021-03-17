const express = require('express');
import {Request, Response, NextFunction} from "express";

export const router = express.Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    res.send('all good I am working fine');
});
