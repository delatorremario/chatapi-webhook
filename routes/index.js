const routes = require('express').Router()
const bodyParser = require('body-parser')

const urlencodedParser = bodyParser.urlencoded({ extended: false })

routes.get("/", urlencodedParser, async (req, res) => {
    let message = "Welcome to ChatApi-gateway/webhook"
    res.json(message);    
});

module.exports = { routes };