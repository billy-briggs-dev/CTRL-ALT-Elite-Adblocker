urls = ["http://easylist-downloads.adblockplus.org/antiadblockfilters.txt",
    "https://www.fanboy.co.nz/r/fanboy-complete.txt",
    "https://easylist-downloads.adblockplus.org/fb_annoyances_full.txt",
    "https://easylist-downloads.adblockplus.org/fb_annoyances_full.txt"];
lists = [];
for (var i = 0; i < urls.length; ++i) {
    fetch(urls[i]).then(r => r.text()).then(result => {
        lists.push(JSON.stringify(result));
    });
}
