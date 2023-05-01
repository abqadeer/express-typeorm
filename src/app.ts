import * as dotenv from 'dotenv';
dotenv.config()
import * as express from 'express';
import { Request, Response } from 'express';
import  userRouter from './routes/user'



const app = express();
app.use(express.urlencoded());
app.use(express.json());

app.use(userRouter)

app.all('*', (req: Request, res: Response) => {
    return res.status(404).json({
        error: 'Not Found',
    });
});


app.listen(3000, () => {
    console.log(`Server is running on port ${process.env.EXPRESS_PORT}`);
});