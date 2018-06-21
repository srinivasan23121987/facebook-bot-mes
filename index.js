var MessengerPlatform = require('facebook-bot-messenger');

var app = require('express')();
var server = require('http').Server(app);
var bot = MessengerPlatform.create({
  pageID: '<your page id>',
  appID: '118602068794174',
  appSecret: '<your app secret>',
  validationToken: '<your validation token>',
  pageToken: '<your page token>'
}, server);
app.use(bot.webhook('/webhook'));
bot.on(MessengerPlatform.Events.MESSAGE, function(userId, message) {

});
server.listen(5253 || process.env.PORT);