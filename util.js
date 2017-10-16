module.exports = util = {
	computeHash: (txt, hash="sha256") => crypto.createHash(hash).update(txt, "ascii").digest(),
	verifyOre: (nulls, prefix, ore) => util.computeHash(prefix + ore).toString("hex").startsWith("0".repeat(nulls)),
};
