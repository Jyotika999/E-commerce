import express from 'express';
import connectDB from './config/db.js';
import colors from 'colors';
import productRoutes from './routes/productRoutes.js'
import { notFound, errorHandler } from './middleWare/errorMiddleware.js';
import dotenv from 'dotenv';

dotenv.config()
connectDB()
const app= express();

app.get('/', (req, res)=>{
    res.send('API is sending request');
});

app.use('/api/products', productRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT= process.env.PORT||5000
app.listen(PORT, console.log(`Server running int ${process.env.NODE_ENV} mode on port: ${PORT}`.yellow.bold));