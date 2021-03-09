import { RequestHandler } from 'express'

export const signin: RequestHandler = (req, res, next): void => {
    res.render('../views/signin.ejs');
}