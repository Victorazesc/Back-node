const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

const api = require('./src/Routes/api')

app.use('/v1', api);

app.listen(666, () => {
  console.log("Vai capeta");
})