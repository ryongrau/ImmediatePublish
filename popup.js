$( document ).ready(function() {

	$(document).bind('keypress', function(e) {
		if(e.keyCode==13){
			var myText = "init publish";
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
				chrome.tabs.sendMessage(tabs[0].id,
				 {greeting: myText},
				 function(response) {
					console.log(response.farewell);
				});
			});
		};
	});


	$('#publishNow').click(function(){
		var myText = "init publish";
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id,
			 {greeting: myText},
		 	function(response) {
				console.log(response.farewell);
			});
		});
	});
});
