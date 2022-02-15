const { Client, Intents } = require('discord.js');
import { Node, Cluster } from "lavaclient";

const info = { host: "localhost", port: 2333, password: "youshallnotpass" }

const lavalink = new Node({
    connection: info,
    sendGatewayPayload: (id, payload) => sendWithDiscordLib(id, payload)
});

// or for clustering:

const lavalink = new Cluster({
    nodes: [ { id: "main", ...info } ],
    sendGatewayPayload: (id, payload) => sendWithDiscordLib(id, payload)
});

lavalink.connect("870267613635309618");

const results = await lavalink.rest.loadTracks("ytsearch:ever gonna give you up");

await lavalink
    .createPlayer("830616783199010857")
    .connect("830638203739308053")
    .play(results.tracks[0])

    const node = new Node({
        connection: {
            // resuming, a key must be supplied or else it wont work.
            resuming: {
               key: "lavad3n0ftw" 
            },
    
            // exponential backoff
            reconnect: {
                type: "exponential",
                maxDelay: 15000,
                initialDelay: 1000,
                tries: -1 // unlimited
            },
    
            // basic 
            reconnect: {
                type: "basic",
                delay: 5000.,
                tries: 5
            },
        }
    }); 



    