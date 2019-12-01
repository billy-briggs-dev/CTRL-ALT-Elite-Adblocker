var enabled = true;
var lists = [];

//function WriteFile(location, str)
//{

//var fh = fopen(location, 3); // Open the file for writing

//if(fh!=-1) // If the file has been successfully opened
//{
//    fwrite(fh, str); // Write the string to a file
//    fclose(fh); // Close the file
//}

//}


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
    ///alert("fileData: " + fileData);
    //WriteFile(chrome.runtime.getURL("0131-block-list.txt"), fileData)    
    //masterlist = create_master_list(filter(fileData), filter(fileData), filter(fileData), filter(fileData));
    lists.push(fileData);
    localStorage.setItem("list1", fileData);
    ///alert("in function storage: " + localStorage.getItem("list1"));
    return fileData;
	}

get_list("https://austinhuang.me/0131-block-list/list.txt", handleFileData);
get_list("https://easylist-downloads.adblockplus.org/fb_annoyances_full.txt", handleFileData);
get_list("https://easylist-downloads.adblockplus.org/antiadblockfilters.txt", handleFileData);
get_list("https://www.fanboy.co.nz/r/fanboy-complete.txt", handleFileData);
//await wait(5000);
setTimeout(function(){ 
    alert("It works! " + localStorage.getItem("list1"));
    alert("list storage " + lists[0]);
    localStorage.setItem("masterlist", String(create_master_list(filter(lists[0]), filter(lists[1]), filter(lists[2]), filter(lists[3]))));
    alert("local masterlist: " + localStorage.getItem("masterlist"));
}, 2000);
//alert("zero wait " + localStorage.getItem("list1"));

//fh = fopen(chrome.runtime.getURL("0131-block-list.txt", 0)); // Open the file for reading
//if(fh!=-1) // If the file has been successfully opened
//{
//    length = flength(fh);         // Get the length of the file    
//    str = fread(fh, length);     // Read in the entire file
//    fclose(fh);                    // Close the file
    
// Display the contents of the file    
//    alert("It works!: " + write(str));    
//}


//alert("filter url: " + chrome.runtime.getURL("0131-block-list.txt"));

//var list = "||sdasasyydd.com^$third-party\n||sdfsdvc.com^$third-party\n||seaofads.com^$third-party\n||search123.uk.com^$third-party\n||apopgo.com^";
chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
        console.log("blocking:", details.url);
        alert("in webrequest " + localStorage.getItem("masterlist"));
        return {cancel: enabled};
	},
	//should change to pass filter() some other list
    //possibly some section of the fanboy list, instead of blocked_domains
    
	{urls: (localStorage.getItem("masterlist")).split(',')}
    ["blocking"]
);
//alert("background loaded");