function create_master_list(f1, f2, f3, f4){
    var master_array = f1.concat(f2.concat(f3.concat(f4)));
    var masterset = new Set(master_array); //gets rid of duplicates
    master_array = [...masterset];
    return master_array;
}
//alert(String(create_master_list(f1, f2, f3, f4)));

var lists = [];


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
    lists.push(fileData);
    //localStorage.setItem("list1", fileData);
    return fileData;
	}

get_list("https://austinhuang.me/0131-block-list/list.txt", handleFileData);
get_list("https://easylist-downloads.adblockplus.org/fb_annoyances_full.txt", handleFileData);
get_list("https://easylist-downloads.adblockplus.org/antiadblockfilters.txt", handleFileData);
get_list("https://www.fanboy.co.nz/r/fanboy-complete.txt", handleFileData);

setTimeout(function(){ 
    //alert("It works! " + localStorage.getItem("list1"));
    //alert("list storage " + lists[0]);
    localStorage.setItem("masterlist", String(create_master_list(filter(lists[0]), filter(lists[1]), filter(lists[2]), filter(lists[3]))));
      alert("local masterlist: " + localStorage.getItem("masterlist"));
      console.log(localStorage.getItem("masterlist"));
}, 3000);



