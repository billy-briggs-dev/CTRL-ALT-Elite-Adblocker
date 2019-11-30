chrome.runtime.sendMessage(
    {contentScriptQuery: 'fetchUrl',
     url: "https://austinhuang.me/0131-block-list/list.txt"},
    response => alert(response.text()));