const express = require('express');
const session = require('express-session');
const cors = require('cors');
const {json} = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {console.log(`Listening on port ${port}`)});