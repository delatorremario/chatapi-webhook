const routes = require("express").Router();
const bodyParser = require("body-parser");
const chatApi = require("../controllers/chat-api");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

routes.post("/sendmsg", urlencodedParser, async (req, res, next) => {
    try {
        const { body } = req;
        console.log("----> TCL: body", body)
        let message = '';
        
        if (body.to != '' && body.from != '' && body.text != '' && body.token != '') {
            let data = { token: "apiwhakey", uid: body.from, to: body.to, text: body.text }
            let responseSendMsgText  = await chatApi.sendMsg(data);
        }else {
            message = "Error to send message";
        }
        
        res.json(message);
        next()        
    } catch (error) {
        res.status(400).json({ err: "Server not found!" });
    }
})

module.exports = { routes };
