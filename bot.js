const Discord = require("discord.js");

const util = require("./util.js");

function CoinBot (config) {
	this.client = new Discord.Client();
	
	this.config = config;
	
	Client.on("ready", () => {
		console.log("Ready!");
		Client.on("message", this.handler);
	});
}

CoinBot.prototype.handler = function (msg) {
	if (msg.author.id == Client.user.id) {
		return;
	}
	
	var content = msg.content;
	var response;
	
	if (content.startsWith(this.config.prefix)) {
		var args = content.slice(this.config.prefix.length).split(" ");
		var cmd = args.shift();
		
		if (cmd in CoinBot.base) {
			response = cmd.apply(this, args);
		} else {
			response = this.config.err.cmd_not_found || "Sorry, this command could not be found.";
		}
	}
	
	msg.channel.sendMessage(response);
};

CoinBot.base = {
	help: () => `\`\`\`
		${this.config.name} Help Page
		-----------------------------
		Commands:
			* ${this.config.prefix}mine <problem-id> <solution>: Earn 1000 ${this.config.name} by solving the SHA256 nonce problem posted in the mining channel.
	\`\`\``,
	mine: (pid, solution) => {
		
	}
};
