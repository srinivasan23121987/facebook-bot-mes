var MessengerPlatform = require('facebook-bot-messenger');

var app = require('express')();
var server = require('http').Server(app);
let bodyParser = require('body-parser');
var bot = MessengerPlatform.create({
    pageID: '1823796064585969',
    appID: '938799082965836',
    appSecret: '5e937cc26f273343cd739b663993bb40',
    validationToken: 'srinivasan',
    pageToken: 'EAANV1THbC0wBANGJFgwHNoKZBnhW3u8Q52LI7OvUa9VCNYuAHypG4xxPAMr3FtBMBhT6AcoG86O62NZAjBIVGX0dQ3oOTtbNZAiZCtdynMd1hEGR6VISk9e8AKScaUPxjKlRBs6qRTTSUqbuv2BpWifh5VohyXYRggOSXJSCGQZDZD'
}, server);
app.use(bot.webhook('/webhook'));
app.use(bodyParser.json());
bot.on(MessengerPlatform.Events.MESSAGE, function (userId, message) {
    console.log(userId + "=>" + message);
});
app.post("/slackwebhook", function (req, res) {
    console.log(req.body);
    res.send(req.body.challenge);
})
server.listen(3000 || process.env.PORT);