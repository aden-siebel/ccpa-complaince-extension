chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	//Set up regexes

	//Regex for do not sell HTML block
	var dnsEx = /<[-a-zA-Z0-9@:%._\+~#="/ ;>|()]{2,256}Do Not Sell/;
	var dnsRegex = new RegExp(dnsEx);

	//Regex for links
	var linkEx = /href=".*?"/;
	var linkRegex = new RegExp(linkEx);

	var matches = document.documentElement.innerHTML.match(dnsRegex);
	var links = 0;

	var toSend = 0;

	if(matches)
	{
		//Grab the href
		links = matches[0].match(linkRegex);
		var link;

		if(links)
		{
			link = links[0];
			link = link.substring(6, link.length - 1);

			if(!(link.startsWith("http") || link.charAt(0) === '/'))
			{
				toSend = 1;
			}
			else
			{
				toSend = link;
			}
		}
		else
		{
			toSend = 1;
		}
	}

	sendResponse({link: toSend}) ;

})
