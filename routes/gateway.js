const routes = require("express").Router();
const bodyParser = require("body-parser");
const chatApi = require("../controllers/chat-api");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

routes.post("/", urlencodedParser, async (req, res, next) => {
  try {
    const { body } = req;
    console.log("----> TCL: body", body);
    let message = "";

    if (body.to != "" && body.text != "" && body.token != "") {
      let data = {
        token: body.token,
        to: body.to,
        text: body.text
      };
      let responseSendMsgText = await chatApi.sendMsg(data);

      message = responseSendMsgText;
    } else {
      message = "Please complete de body";
    }

    res.json(message);
    next();
  } catch (error) {
    console.log("TCL: error", error.response || error);
    res.status(error.response.status || 500).json({ error: error.response.data.error || error.message });
  }
});

module.exports = { routes };
