const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors")

const departmentRoute = require("./routes/departmentRoute");

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors())

connectDB();

app.use("/api/department", departmentRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is Running on PORT ${PORT}`);
});
