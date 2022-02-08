document.getElementById("getURL").onclick = function() {getUrl()};

function getUrl() {
  var gUrl = document.getElementById("url");
  var error = document.getElementById("error");
  var invidlink = document.getElementById("invidlink");

  gUrl.style.display="none";
  error.style.display="none";

  let querying = browser.tabs.query({currentWindow: true, active: true});
  querying.then((tabs) => {
	let currTab = tabs[0].url;
	if(currTab.indexOf("youtube") !== -1) {
		var arr = currTab.split("/");
		var instance = document.getElementById("inst").value;
		var destURL = "https://" + instance + "/" + arr.pop();
		invidlink.setAttribute("href", destURL)  
		gUrl.style.display="block";
		} else {
		error.style.display="block";
	}});

}

function getPage(){
  browser.tabs.query({currentWindow: true, active: true})
    .then((tabs) => {
      console.log(tabs[0].url);
  })
}
