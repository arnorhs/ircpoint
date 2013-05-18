var http = require('http'),
    sockjs = require('sockjs'),
    IrcClient = require('irc').Client;

// Websocket connection for clients to connect to
var sock = sockjs.createServer();
sock.on('connection', function(conn) {

    // Irc client to connect to a server
    var nick = 'ircpoint';
    // It would be nice if it didn't connect right away.. maybe there's an option for that
    var client = new IrcClient('irc.freenode.org', nick, {
        channels: ["#javascript"]
    });

    client.addListener('raw', function(message) {
        conn.write(JSON.stringify(message));
    });

    conn.on('data', function(message) {
        console.log("message response:", message);
    });
    conn.on('close', function() {});
});

var server = http.createServer();
sock.installHandlers(server, {prefix:'/connection'});
server.listen(1337, '0.0.0.0');
