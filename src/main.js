const Discord = require("discord.js");
const auth = require("./auth.json");
const clearingMessage = require("./clearingMessage.json");

var key = "";
var size = Object.keys(auth).length;
var i;
for (i = 0; i < size; i++) {
    key = key + auth[i];
}
console.log(key);

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

const client = new Discord.Client();
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

const prefix = "$";

client.login(key);
client.on('message', message => {
    
    var lowerMsg = message.content.toLowerCase();
    switch (lowerMsg) {
        case prefix + "clear": {
            for (let i = 0; i < 2; i++)
                message.channel.send(clearingMessage.message);
            break;
        }
        case prefix || prefix + "help": {
            message.channel.send("commands:\n   " + prefix + "clear - Clear the screen from any garbage.");
            break;
        }
        default: {

        }
    }
    
});