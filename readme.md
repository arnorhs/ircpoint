### IRC Point

The goal is to create a IRC over web socket connection layer, that you can build IRC
clients on top of.

Right now it's relatively pseaudocode-ish. Making connections via socksjs kind of works,
but is not useful and just always connects to a fixed client etc.

### testing the client

At least these steps worked for me, from navigating to http://localhost:1337/connection

In the chrome JS console:

    var script = document.createElement("script");
    script.src = "http://cdn.sockjs.org/sockjs-0.3.min.js";
    ($0).appendChild(script);
    var sock = new SockJS('http://localhost:1337/connection');
    sock.onmessage = function(e) {
        console.log('message', e.data);
    };

And it writes all the responses from the IRC server

### TODO:

- Make it generic to accept any irc user and keep that connection
  going after a client disconnects/reconnects.
- Think through what authentication would look like.
- Being able to send IRC commands back.
- Not sure how much of the client code should live on this project. Probably none.

