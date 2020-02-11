const apiURL = "https://eu53.chat-api.com/instance70006/"
const token = "mi4kmh31o3bkdom3"
const axios = require("axios");
const url = `${apiURL}/sendMessage?token=${token}`

sendMsg = async ({ token, from, to, text, data, filename }) => {
    try {
        const data = {
            phone: '5492616756885', // Receivers phone
            body: 'Hello!',
        };

        let  = {
            method: "POST",
            headers: { Authorization: `Token ${token}` },
            json: data,
            url: url
          };

        // send a request
        const response = await axios(option);
        return { data: response.data, status: response.status };;        
    } catch (error) {
        throw err;
    }
}

module.exports = { sendMsg };