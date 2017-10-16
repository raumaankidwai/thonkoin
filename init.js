new require("./bot.js")({
	prefix: "thonk ",
	
	name: "ThonKoin",
	symbol: "TK",
	
	mzs: 5,
	
	err: {
		cmd_not_found: ":thonk: hmmm could not find this command :thinking:"
	}
});
