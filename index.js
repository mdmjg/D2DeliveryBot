const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(3000, () => console.log("Webhook server is listening, port 3000"));


const verificationController = require("./controllers/verification");
app.get("/", verificationController);
const messageWebhookController = require("./controllers/messageWebhook");
app.post("/", messageWebhookController);


