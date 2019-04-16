

chrome.runtime.onMessage.addListener(function (request) {
	var one = window.location;
	var res = one.toString().split("/");
	window.open("https://keyforge-compendium.com/decks/" + res[4], "_blank");
})
