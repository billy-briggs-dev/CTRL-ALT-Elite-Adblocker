var enabled = true;

function get_list(path, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            // did the request work?
            if (xhr.status == 200) {
                // use `xhr.responseText` here
                return callback(xhr.responseText);
            } else {
                //failed
                return callback(null);
            }
        }
    };
    xhr.open("GET", path);
    xhr.send();
}

function handleFileData(fileData) {
    if (!fileData) {
        // Show error
        return;
	}
    alert("fileData: " + fileData);
		//masterlist = create_master_list(filter(fileData), filter(fileData), filter(fileData), filter(fileData));
		//return masterlist;
	}

get_list("https://austinhuang.me/0131-block-list/list.txt", handleFileData);




//alert("filter url: " + chrome.runtime.getURL("0131-block-list.txt"));

var list = "||sdasasyydd.com^$third-party\n||sdfsdvc.com^$third-party\n||seaofads.com^$third-party\n||search123.uk.com^$third-party\n||apopgo.com^";
chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
		console.log("blocking:", details.url);
		return {cancel: enabled};
	},
	//should change to pass filter() some other list
	//possibly some section of the fanboy list, instead of blocked_domains
	{urls: create_master_list(filter(list), filter(list), filter(list), filter(list))},
    ["blocking"]
);
//alert("background loaded");