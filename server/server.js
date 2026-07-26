import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connecDB from './configs/db.js';
import dns from 'dns';
import userRouter from './routes/userRoutes.js';
import resumeRouter from './routes/resumeRoutes.js';
import aiRouter from './routes/aiRoutes.js';
// Change DNS
dns.setServers(["1.1.1.1", "8.8.8.8"]);

// Database connection 
await connecDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Server is live..");
})

app.use('/api/users',userRouter);
app.use('/api/resumes',resumeRouter);
app.use('/api/ai', aiRouter);

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})