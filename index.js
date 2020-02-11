const express = require('express')
const routesWebhook = require('./routes/webhook');
const routesGateway = require('./routes/gateway');
const app = express();

app.use(express.json());

app.use('/webhook', routesWebhook.routes);
app.use('/getway', routesGateway.routes);

app.listen(4000, () => {
    console.log(`Server running on http://localhost:4000`);    
})