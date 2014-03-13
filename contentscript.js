jQuery.expr[':'].regex = function(elem, index, match) {
    var matchParams = match[3].split(','),
        validLabels = /^(data|css):/,
        attr = {
            method: matchParams[0].match(validLabels) ? 
                        matchParams[0].split(':')[0] : 'attr',
            property: matchParams.shift().replace(validLabels,'')
        },
        regexFlags = 'ig',
        regex = new RegExp(matchParams.join('').replace(/^\s+|\s+$/g,''), regexFlags);
    return regex.test(jQuery(elem)[attr.method](attr.property));
}

$( document ).ready(function() {
    console.log( "immediate publish ready!" );
	if ($.url().param('publish')==='immediately'){
		$(':regex(href,immediate\%20publish)').first().each(function(){
			console.log('link:' + $(this).attr('href'));
			window.location.replace('https://cms.doe.gov' + $(this).attr('href') + '?publish=finally')
		 });
	}
	if ($.url().param('publish')==='finally'){
		console.log('finally:');
		$('#edit-submit').click();
		$('#edit-submit').trigger('click');
		$('#edit-submit').trigger('mouseup');
		$('#edit-submit').trigger('submit');
	} else {
		console.log('not final?  Really?');
	}
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab?sender.tab.url :
                request.greeting + ' do it');
	//populateFields(request.greeting)
	
    if (request.greeting == "init publish")
	
	 $(':regex(href,workflow)').first().each(function(){
		console.log('link:' + $(this).attr('href'));
		window.location.replace('https://cms.doe.gov' + $(this).attr('href') + '?publish=immediately')
	 });
		
      sendResponse({farewell: "goodbye"});
  });

  
  
