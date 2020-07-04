var redirectUrl = "https://www.google.com";
checkForVideoContent();
function checkForVideoContent(){
var url = window.location.href;
console.log("Current Url : " + url);
var title = document.title; 

console.log("Current Page title : " + title)
if(title.includes("videos")){
	redirectToNewUrl();
	return;
}
var metas = document.getElementsByTagName("meta");
	console.log("Metas Length : " + metas.length);
	for(var i = 0; i< metas.length; i++){
		var tagName = metas[i].getAttribute("name");
		if(tagName && tagName == "description"){
		var descriptionContent = metas[i].getAttribute("content");
		console.log("Description Tag : " + descriptionContent)
		if(descriptionContent.includes("videos") || descriptionContent.includes("video")){
			redirectToNewUrl();
			break;
		}	
		}
	}
}
function redirectToNewUrl(){
	console.log("Redirected Here")
	window.location.href = redirectUrl;
}