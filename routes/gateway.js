const routes = require("express").Router();
const bodyParser = require("body-parser");
const chatApi = require("../controllers/chat-api");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

routes.post("/", urlencodedParser, async (req, res, next) => {
  try {
    const { body } = req;
    console.log("----> TCL: body", body);
    let message = "";

    if (
      body.to != "" &&
      body.from != "" &&
      body.text != "" &&
      body.token != ""
    ) {
      let data = {
        token: body.token,
        uid: body.from,
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
    console.log("TCL: error", error.message);
    res.status(500).json({ err: error.message });
  }
});

module.exports = { routes };
