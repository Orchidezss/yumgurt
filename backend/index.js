import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import productRoute from "./routes/productRoute.js"

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// product
app.use('/product', productRoute);

