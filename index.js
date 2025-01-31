const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./route/userRoute');
const productRoutes = require('./route/productRoute');
const app = express();
const PORT = 2200;
// const live_uri =
//   'mongodb+srv://futhifoxmaseko:FuthiFoXx_54140@cluster0.y7f3g.mongodb.net/myStore?retryWrites=true&w=majority&appName=Cluster0';

const local_URI = 'mongodb://localhost:27017/multer';
app.get('/', (req, res) => {
  res.status(200).send('api is ready!!!');
});
app.use(cors());
app.use(express.json());
app.use('/auth', userRoutes);
app.use('/product', productRoutes);

mongoose
  .connect(local_URI)
  .then(() => console.log('mongoDB Connected'))
  .catch((err) => console.log('Connection Error: ', err));

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
