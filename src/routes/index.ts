import {Router, Request, Response} from 'express';

const router = Router();

router.get('/', (req:Request, res: Response) => {
    return res.render('main')
})

export default router;