import * as multer from 'multer';
import { UserService } from '../services/user';
import { Router } from 'express';
import { Request, Response } from 'express';




const formData = multer();
const userRouter = Router();



userRouter.post('/validate', formData.none(), async (req: Request, res: Response) => {

    const body = req.body;

    const user = await UserService.saveUser(body)

    res.json({response: user})

});

export default userRouter