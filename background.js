var enabled = true;

function select_list(){
    if (localStorage.getItem("masterlist") == null){
        alert("null");
        return blocked_domains;    
    }
    else{
        alert("set");
        return localStorage.getItem("masterlist").split(",");   
    }
    }

chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
        console.log("blocking:", details.url);
        return {cancel: enabled};
	},
    
	{urls: select_list()},
    ["blocking"]
);

//if (localStorage.getItem("masterlist") == null){blocked_domains; alert("null")}else{localStorage.getItem("masterlist").split(","); alert("set");};