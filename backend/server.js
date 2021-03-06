

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
//import data from './data.js';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import orderRouter from './routers/orderRouter.js';
import path from 'path';
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

mongoose.connect(process.env.MONGODB_URL || "mongodb+srv://react:react@cluster0.kv8el.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use('/api/users', userRouter);

app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.use('/api/config/paypal', (req, res)=>{
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb' );  
});

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req,res) =>
res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);


/*app.get('/', (req, res) => {
  res.send('Server is ready');
});
*/
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message});
});

//const port = process.env.Port || 5000;
app.listen(5000, () => {
  console.log('Serve at http://localhost:5000');
});