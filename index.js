const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

require("./routes/tweets")(app);

app.listen(5000);
