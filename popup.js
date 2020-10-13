document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', onclick, false)

  function onclick () {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
       chrome.tabs.sendMessage(tabs[0].id, 'hi', setCount)
     })
  }

  function setCount (res) {
    if(res == 0)
    {
      var div = document.createElement('div');
      div.textContent = `Do not sell link found, but cannot be extracted`
      document.body.appendChild(div)

      var a = document.createElement('a');
      var linkText = document.createTextNode("File a complaint?");
      a.appendChild(linkText);
      a.title = "my title text";
      a.href = `https://oag.ca.gov/contact/consumer-complaint-against-business-or-company`
      document.body.appendChild(a);
    }
    else if(res == 1)
      {
        var div = document.createElement('div');
        div.textContent = `No link found`
        document.body.appendChild(div)

        var a = document.createElement('a');
        var linkText = document.createTextNode("File a complaint?");
        a.appendChild(linkText);
        a.title = "my title text";
        a.href = `https://oag.ca.gov/contact/consumer-complaint-against-business-or-company`
        document.body.appendChild(a);

      }
      else
      {
        var a = document.createElement('a');
        var linkText = document.createTextNode("Link to privacy");
        a.appendChild(linkText);
        a.title = "my title text";
        a.href = `${res.link}`
        document.body.appendChild(a);
      }


  }
}, false)
