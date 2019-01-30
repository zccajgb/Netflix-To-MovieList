var watchList = "https://todoist.com/app?lang=en#project%2F2154990004%2Ffull";
sessionIds = [];

chrome.tabs.onUpdated.addListener(function () {
	chrome.tabs.query({"active": true, "currentWindow": true}, function(tabs) 
	{	
		var netflix = "https://www.netflix.com/browse";
		var url = tabs[0].url;
		if (url === netflix  && !sessionIds.includes(tabs[0].id))
		{
			chrome.tabs.create({"url": watchList});
			sessionIds.push(tabs[0].id);
		}
	});
});
