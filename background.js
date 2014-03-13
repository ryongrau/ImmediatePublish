// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  //console.log('LOG!!');
  
  var myText = "init publish";
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id,
			 {greeting: myText},
		 	function(response) {
				console.log(response.farewell);
			});
		});
		
  chrome.tabs.executeScript({
    //code: 'document.body.style.backgroundColor="red"'
  });
});