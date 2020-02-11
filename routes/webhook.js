const routes = require('express').Router()
const bodyParser = require('body-parser')
//const webhook = "https://775dba82.ngrok.io"

const urlencodedParser = bodyParser.urlencoded({ extended: false })

routes.post("/", urlencodedParser, async (req, res) => {
    const body = req.body; // new messages
    console.log(body)   
    //const { messages } = req.body;   
    res.json("hello world!");    
});

module.exports = { routes };