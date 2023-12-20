import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; 
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import productRoutes from './routes/productRoutes.js'
import loginRoutes from './routes/loginRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

// Configuration 
dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

//routes
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/auth", loginRoutes);
app.use("/api/v1/order", orderRoutes)
//mongoose
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.DB_URL).then(()=> {
    app.listen(PORT, () => console.log(`Server Port: ${PORT} connected successfully`));

})
.catch((error)=> console.log(`${error} did not connect`));