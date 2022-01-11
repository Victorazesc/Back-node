const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 3000
app.use(express.json());
app.use(cors());

const api = require('./src/Routes/api')

app.use('/v1', api);

app.listen(port, () => {
  console.log("Vai capeta");
})