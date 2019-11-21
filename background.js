var enabled = true;
chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
		console.log("blocking:", details.url);
		return {cancel: enabled};
	},
	//should change to pass filter() some other list
	//possibly some section of the fanboy list, instead of blocked_domains
	{urls: filter(blocked_domains)},
    ["blocking"]
);