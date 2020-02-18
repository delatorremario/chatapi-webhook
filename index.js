const express = require('express')
const routesWebhook = require('./routes/webhook');
const routesGateway = require('./routes/gateway');
const routesIndex = require('./routes/index');
const app = express();

app.use(express.json());

app.use('/', routesIndex.routes);
app.use('/webhook', routesWebhook.routes);
app.use('/gateway', routesGateway.routes);

app.listen(4000, () => {
    console.log(`Server running on http://localhost:4000`);    
})