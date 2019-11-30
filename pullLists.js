var urls = ["http://easylist-downloads.adblockplus.org/antiadblockfilters.txt",
"https://www.fanboy.co.nz/r/fanboy-complete.txt",
"https://easylist-downloads.adblockplus.org/fb_annoyances_full.txt",
"https://easylist-downloads.adblockplus.org/fb_annoyances_full.txt"];
const lists = [];
for (var i = 0; i < urls.length; ++i) {
    fetch(urls[i]).then(function(response) {
        return response.blob
    }).then(function(blob) {
        const result = blob;
        lists[i] = result;
    });
    alert(lists[i]);
}
