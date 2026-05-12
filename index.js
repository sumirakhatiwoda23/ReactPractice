import express from 'express';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import morgan from 'morgan';
import fileUpload from 'express-fileupload';

const app = express();

dotenv.config();

app.use(express.json());
app.use(morgan("dev"));

app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
}));

mongoose.connect(process.env.DB_URL)
  .then(() => {
    app.listen(5000, () => {
      console.log("Database connected and server running on port 5000");
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.get('/', (req, res) => {
  return res.status(200).json({
    message: "Hello world"
  });
});

app.use('/api/products', productRoutes);
app.use(userRoutes);