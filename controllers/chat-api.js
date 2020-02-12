const chat_apiURL = require("../config/constants")
const token = "mi4kmh31o3bkdom3"
const axios = require("axios");

sendMsg = async ({ token, from, to, text, data, filename }) => {
    try {
        let data = {
            phone: '5492616756885', // Receivers phone
            body: 'Hello!',
        };

        let options = {
            method: "POST",
            headers: { 
                Authorization: `Token ${token}`,
                "Content-type" : "application/json"
            },
            json: data,
            url: `${chat_apiURL}/sendMessage?token=${token}`
          };

        // send a request
        const response = await axios(options);
        return { data: response.data, status: response.status };;        
    } catch (error) {
        throw err;
    }
}

module.exports = { sendMsg };