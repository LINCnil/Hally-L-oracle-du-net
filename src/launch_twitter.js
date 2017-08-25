var browser = chrome;

var activetabs = [];

//alert("launchtwitter");

document.addEventListener('DOMContentLoaded', function () {

	var css_lastcouche ='.lastcouche {background-image:'+chrome.extension.getURL('src/css/internet.gif')+';}';

	chrome.tabs.insertCSS(null, { code: css_lastcouche });
	chrome.tabs.insertCSS(null, { file: "/src/css/style_twitter.css" });
	chrome.tabs.executeScript(null, { file: "/src/fabric.js" });
	chrome.tabs.executeScript(null, { file: "/src/TweenLite.min.js" });
	chrome.tabs.executeScript(null, { file: "/src/TimelineMax.min.js" });
	chrome.tabs.executeScript(null, { file: "/src/jquery-3.2.1.min.js" });
	chrome.tabs.executeScript(null, { file: "/src/jquery-ui.min.js" });
	chrome.tabs.executeScript(null, { file: '/src/d3.min.js' });
	document.getElementById("go").addEventListener("click",
		function () {
			window.close();
			browser.tabs.executeScript(null, {file : "/src/general_twitter.js"});
			browser.tabs.executeScript(null, {file : "/src/couche_twitter_2.js"});
			browser.tabs.executeScript(null, {file : "/src/couche_twitter_1.js"});
	});
});
