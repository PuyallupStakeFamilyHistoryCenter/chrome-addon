'use strict';

chrome.runtime.onInstalled.addListener(function() {
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
		chrome.declarativeContent.onPageChanged.addRules([{
			conditions: [new chrome.declarativeContent.PageStateMatcher({pageUrl: {hostEquals: 'www.familysearch.org'},})],
			actions: [new chrome.declarativeContent.ShowPageAction()]
		}]);
		console.log('Host conditions set.');
	});
});