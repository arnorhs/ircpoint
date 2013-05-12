var IrcClient = require('irc').Client;

var nick = 'arnorhs__';
var client = new IrcClient('irc.freenode.org', nick, {
    channels: ["#javascript"]
});

client.addListener('registered', function (message) {
    console.log(message.args);
});
client.addListener('motd', function (motd) {
    console.log(motd);
});
client.addListener('message', function (from, to, message) {
    console.log(from, to, message);
    if (to === nick) {
        client.say(from, "Hey " + from + ", what's up in the hood?");
    }
});
client.addListener('error', function(error) {
    console.log(error);
});
