const mongoose = require("mongoose");
const connectionS = `mongodb://127.0.0.1:27017/ejercicio_full_stack`;

mongoose
  .connect(connectionS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Base de datos de Mongo conectada");
  })
  .catch((err) => {
    console.error(err);
  });