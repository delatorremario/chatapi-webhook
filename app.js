const morgan = require("morgan");
const express = require("express");
const bodyParser = require("body-parser");

// const routesWebhook = require("./routes/webhook");
// const routesGateway = require("./routes/gateway");
const routesIndex = require("./routes/index");
const app = express();
app.use(morgan("dev"));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/", routesIndex);
// app.use('/webhook', routesWebhook.routes);
// app.use('/gateway', routesGateway.routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Started !! ${PORT}`);
  console.log(`*** NODE_ENV *** ${process.env.NODE_ENV}`);
});
