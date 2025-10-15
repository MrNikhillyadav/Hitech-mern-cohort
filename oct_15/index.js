const dotenv = require('dotenv')
dotenv.config();
const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./routes/userRouter');
const todoRouter = require('./routes/todoRouter');
const authMiddleware = require('./middlewares/authMiddleware');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/v1/user',userRouter);
app.use(authMiddleware)
app.use('/api/v1/todos',todoRouter)

mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("db connected "))
    .catch((e) => console.log("error in connecting to db"));

    
app.listen(3000,() => {
    console.log("server is running on port 3000")
})

