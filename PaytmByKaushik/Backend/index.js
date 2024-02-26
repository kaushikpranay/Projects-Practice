const express = require("express")
const rootRouter = require("./routes/index");
const jwt = require("jsonwebtoken");
var cors = require('cors');
const app = express();
app.use(cors())
app.use(express.json());


app.use("/api/v1", mainRouter);


app.listen(3000);

