/*LIEN VERS LE STACKOVERFLOW http://stackoverflow.com/questions/20181239/chrome-extension-making-extension-active-only-if-matches-match*/

/* When the content scripts makes contact,
 * set the page-action's icon and popup */
chrome.runtime.onMessage.addListener(function(msg, sender) {
    if (msg.WebPageFacebook === true) {
        chrome.browserAction.setIcon({
            tabId: sender.tab.id,
            path: "icons/oracle32.png"
        });
        chrome.browserAction.setPopup({
            tabId: sender.tab.id,
            popup: "src/popupfacebook.html"
        });
    }else if (msg.WebPageGoogle === true) {
            chrome.browserAction.setIcon({
                tabId: sender.tab.id,
                path: "icons/oracle32.png"
            });
            chrome.browserAction.setPopup({
                tabId: sender.tab.id,
                popup: "src/popupgoogle.html"
            });
        } else if (msg.WebPageTwitter === true) {
                chrome.browserAction.setIcon({
                    tabId: sender.tab.id,
                    path: "icons/oracle32.png"
                });
                chrome.browserAction.setPopup({
                    tabId: sender.tab.id,
                    popup: "src/popuptwitter.html"
                });
            }
});

/* When the tab's address changes/reloads,
 * clear the popup and reset the icon.
 * (If applicable, the newly injected content script will send a new message.) */
chrome.tabs.onUpdated.addListener(function(tabId, info, tab) {
    if (info.status === "loadstart") {
        chrome.browserAction.setIcon({
            tabId: tabId,
            path: "icons/oraclesleep.png"
        });
        chrome.browserAction.setPopup({
            tabId: tabId,
            popup: "src/popup2.html"
        });
    }
});
