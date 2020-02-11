const routes = require("express").Router();
const bodyParser = require("body-parser");

const api = require("../controllers/chat-api");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

routes.post("/sendmsg", urlencodedParser, async (req, res, next) => {
    try {
        const { body } = req;
        let message = "";
        if (body.to != "" && body.from != "" && body.text != "" && body.token != ""){
            let data = {
                token: apiwhakey,
                uid: body.from,
                to: body.to,
                text: body.text
            };
            let responseSendMsgText = await WapiCrtl.sendMsg(data);
            message = responseSendMsgText;
        }else {
            message = "Error to send message";
        }
        res.json({ message });
    } catch (error) {
        console.log("TCL:", err);
        res.status(400).json({ err: "Server not found!" });
    }

})
