const routes = require("express").Router();
const bodyParser = require("body-parser");
const chatApi = require("../controllers/chat-api");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

routes.post("/sendmsg", urlencodedParser, async (req, res) => {
    try {
        const { body } = req.body;
        console.log(req.body);

        //let responseSendMsgText = await chatApi.sendMsg(body);
        
        //res.json({});
        
    } catch (error) {
        res.status(400).json({ err: "Server not found!" });
    }
})

module.exports = { routes };
