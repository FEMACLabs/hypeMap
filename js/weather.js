// JavaScript Document

$(document).ready(function() {
	
  $('#citySelect').bind('keyup', function(e) {
	if ( e.keyCode === 13 ) { // 13 is enter key
		citySearch();
	  }
  
  });
  
  $('.citySubmit').click(citySearch);
  
  function citySearch() {
		$('.pure-g').children().fadeOut("slow", function() {
			$('.pure-g').empty();
		});
		
		
	}  
});