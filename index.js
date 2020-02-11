const app = require('express')
const routesWebhook = require('./webhook');

app.use('/getway', routesWebhook.routes);

app.listen(4000, () => {
    console.log(`Server running on http://localhost:4000`);    
})