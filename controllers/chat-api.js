const apiURL = "https://eu53.chat-api.com/instance96711/ "
const token = "yvkngczwsnk1m3fj"
const request = require('request')
const url = `${apiURL}/message?token=${token}`

sendMsg = async () => {
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
        const response = await request(option);
        return response;        
    } catch (error) {
        throw err;
    }
}

module.exports = { sendMsg };