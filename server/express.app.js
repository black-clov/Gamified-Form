import express from 'express';
import dotenv from 'dotenv';


dotenv.config();

const PORT = process.env.APIPORT || 8000;
const app = express();
app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

//define Routes


app.listen(PORT, () => console.log("API is Runnig"));
//app.use('/dashboard', dashboard);
export {app};


