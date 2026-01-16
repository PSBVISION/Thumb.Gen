import express, { Request, Response } from 'express';
import 'dotenv/config'
import cors from 'cors';
import connectDB from './configs/db.js';

await connectDB();

const app = express();

app.use(cors({
    origin: ['http://localhost:5173','http://localhost:3000'],
    credentials: true
}))

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.send('Server is Live!');
});
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});