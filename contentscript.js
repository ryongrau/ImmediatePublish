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

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab?sender.tab.url :
                request.greeting + ' do it');
	//populateFields(request.greeting)
	
    if (request.greeting == "init publish"){
		 $(':regex(href,workflow)').first().each(function(){
			console.log('link:' + $(this).attr('href'));
			window.location.replace('https://cms.doe.gov' + $(this).attr('href') + '?publish=immediately')
		 });
	}
	sendResponse({farewell: "goodbye"});
  });

$( document ).ready(function() {
    console.log( "immediate publish ready!" );
	
	
	if ($.url().param('publish')==='immediately'){
		$(':regex(href,immediate\%20publish)').first().each(function(){
			console.log('link:' + $(this).attr('href'));
			window.location.replace('https://cms.doe.gov' + $(this).attr('href') + '?publish=finally')
		 });
	}
	if ($.url().param('publish')==='finally'){
		console.log('?publish=finally:');
		$('#edit-submit').trigger('click');
	} 

});



  
  
