const routes = require('express').Router()
const bodyParser = require('body-parser')
const webhook = "https://a127f01e.ngrok.io"


const urlencodedParser = bodyParser.urlencoded({ extended: false })

routes.post("/", urlencodedParser, async (req, res) => {
    const body = req.body; // New messages in the "body" variable
    console.log(body)      

    res.json(data); 
});

module.exports = { routes };