(function() {
    //window.addEventListener("message", function(event) {
    //    // We only accept messages from ourselves
    //    if (event.source != window)
    //        return;
    //
    //    if (event.data.type && (event.data.type == "angular-watches")) {
    //        console.log("Content script received: " + event.data.count);
    //
    //        var count = event.data.count;
    //        var text = '';
    //        if(count > 10000) {
    //            text = '!!!';
    //        }
    //        else if(count > 1000) {
    //            text = (count / 1000).toFixed(1) + 'k';
    //        }
    //        else {
    //            text = '' + count;
    //        }
    //
    //        chrome.browserAction.setBadgeText({text: text});
    //
    //    }
    //}, false);

    var port = chrome.runtime.connect({name: "angular-watches"});

    chrome.runtime.onConnect.addListener(function(port) {
        console.assert(port.name == "knockknock");
        port.onMessage.addListener(function (msg) {
            console.log("Content script received: " + msg.watches);

            var count = msg.watches;
            var text = '';
            if (count > 10000) {
                text = '!!!';
            }
            else if (count > 1000) {
                text = (count / 1000).toFixed(1) + 'k';
            }
            else {
                text = '' + count;
            }

            chrome.browserAction.setBadgeText({text: text});
        });
    });
})();