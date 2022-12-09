require("./database/mongo")
const express = require("express");
const router = require("./routes/routes");
const port = 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
 
app.use("/", router);

app.listen(port, () => console.log(`SERVER ON: ${port}`));