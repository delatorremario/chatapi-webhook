const routes = require('express').Router()
const bodyParser = require('body-parser')

const urlencodedParser = bodyParser.urlencoded({ extended: false })

routes.post("/", urlencodedParser, async (req, res) => {
    const { body } = req; // new messages
    console.log(body)   
    let message = "hello world!"
    res.json(message);    
});

module.exports = { routes };