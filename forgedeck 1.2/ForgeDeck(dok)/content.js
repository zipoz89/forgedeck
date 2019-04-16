
chrome.runtime.onMessage.addListener(function (request) {
	var one = window.location;
	var check = one.toString().split("/");
	if(check[2] == "www.keyforgegame.com")
	{
		var res = one.toString().split("/");
		window.open("https://decksofkeyforge.com/decks/" + res[4], "_blank");
	}
	else
	window.open("https://decksofkeyforge.com/", "_blank");	
})
