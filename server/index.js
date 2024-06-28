import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import { MONGODB_URI, PORT } from './config.js';
import booksRouter from './routes/books.route.js';

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  }),
);

app.get('/', (req, res) => {
  return res.status(234).send('Welcome to MERN stack tutorial');
});
app.use('/books', booksRouter);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('App connected to database');

    app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
