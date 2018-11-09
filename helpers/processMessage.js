const API_AI_TOKEN = "8c1b8d8039fe48eca4ba924a6598dc63";
const apiAiClient = require("apiai")(API_AI_TOKEN);
const FACEBOOK_ACCESS_TOKEN = "EAANviCzt2h8BAPZAkG1ams2HZBVe3Wc3kuJXOreCevdXXx3AC2eP7mg1be8mY8yu0RMJFKu50YwVTDlXuh92aXMTA1PZB8FjLIpkhYKnBjAlfZBZC9vxGTuqmjNOloVkrUIDJ4ZAC8FVljkGHI4sZBrBteIvBNiJV7Qc3xBxooaDsawp3LAvx3w";
const request = require("request");
const sendTextMessage = (senderId, text) => {
 request({
 url: "https://graph.facebook.com/v2.6/me/messages",
 qs: { access_token: EAANviCzt2h8BAPZAkG1ams2HZBVe3Wc3kuJXOreCevdXXx3AC2eP7mg1be8mY8yu0RMJFKu50YwVTDlXuh92aXMTA1PZB8FjLIpkhYKnBjAlfZBZC9vxGTuqmjNOloVkrUIDJ4ZAC8FVljkGHI4sZBrBteIvBNiJV7Qc3xBxooaDsawp3LAvx3w },
 method: "POST",
 json: {
 recipient: { id: senderId },
 message: { text },
 }
 });
};
module.exports = (event) => {
 const senderId = event.sender.id;
 const message = event.message.text;
const apiaiSession = apiAiClient.textRequest(message, {sessionId: "crowdbotics_bot"});
apiaiSession.on("response", (response) => {
 const result = response.result.fulfillment.speech;
sendTextMessage(senderId, result);
 });
apiaiSession.on("error", error => console.log(error));
 apiaiSession.end();
};