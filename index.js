const express = require('express')
const routesWebhook = require('./routes/webhook');
const routesGateway = require('./routes/gateway');
const routesIndex = require('./routes/index');
const app = express();

app.use(express.json());

app.use('/', routesIndex);
// app.use('/webhook', routesWebhook.routes);
// app.use('/gateway', routesGateway.routes);

app.listen(5000, () => {
    console.log(`Server running on port ${5000}`);    
})