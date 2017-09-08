var browser = chrome;

var activetabs = [];
//alert("launchgoogle");


document.addEventListener('DOMContentLoaded', function () {

	var css_lastcouche ='.lastcouche {background-image:'+chrome.extension.getURL('src/css/internet.gif')+';}';

	chrome.tabs.insertCSS(null, { code: css_lastcouche });
	chrome.tabs.insertCSS(null, { file: "/src/css/stylegoogle.css" });
	chrome.tabs.executeScript(null, { file: "/src/fabric.min.js" });
	chrome.tabs.executeScript(null, { file: "/src/jquery-3.2.1.min.js" });
	chrome.tabs.executeScript(null, { file: "/src/jquery-ui.min.js" });
	document.getElementById("go").addEventListener("click",
		function () {
			window.close();
			browser.tabs.executeScript(null, {file : "/src/generalgoogle.js"});
			browser.tabs.executeScript(null, {file : "/src/couchegoogle.js"});

	});
});
