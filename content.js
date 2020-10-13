chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  var expression = /href[-a-zA-Z0-9@:%._\+~#="/ ;>|()]{2,256}Do Not Sell/;
  var regex = new RegExp(expression);

  var expression2 = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
  var linkReg = new RegExp(expression2);

  var matches = document.documentElement.innerHTML.match(regex)
  var links = matches[0].match(linkReg)

  if(links[0].indexOf("com") > -1)
  {
    sendResponse({link: 0})  }
  else
  {
    if(links)
    {
      sendResponse({link: links[0]})
    }
    else
    {
      sendResponse({link: 1})
    }
  }




})
