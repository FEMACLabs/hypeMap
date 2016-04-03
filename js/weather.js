// JavaScript Document

var jsonUrl;
var cityName;
var weatherConditionId;
var weatherCondition;
var weatherDescription;
var cityLat;
var cityLon;
var weatherTemp;
var maxTemp;
var minTemp;
var humidity;
var windSpeed;

var condition;
var activity1;
var activity2;
var activity3;

$(document).ready(function() {
	"use strict";
  $('#citySelect').bind('keyup', function(e) {
	if ( e.keyCode === 13 ) { // 13 is enter key
		citySearch();
	  }
  
  });
  
  $('.citySubmit').click(citySearch);
  
  
  
  function citySearch() {
	  var citySelection = $("#citySelect").val();
		$('.pure-g').fadeOut("slow", function() {
			$('.pure-g').empty();
			
			listSearch(citySelection);
			
		});
		
	
		
		
	} 
});

function listSearch(citySelection) {
	"use strict";
        
	switch(citySelection) {
		case 'orlando':
			jsonUrl = "data/cities/orlandoData.json";
			break;
		case 'newYork':
			jsonUrl = "data/cities/newyorkData.json";
			break;
		case 'sanFrancisco':
			jsonUrl = "data/cities/sanfranData.json";
			break;
		case 'houston':
			jsonUrl = "data/cities/houstonData.json";
			break;
		case 'denver':
			jsonUrl = "data/cities/denverData.json";
			break;
	}   

	loadData(jsonUrl);
		
 }
 
 function loadData(jsonUrl) {
	 "use strict";
	  $.getJSON( jsonUrl, function( data ) {
		
		  cityName = data.name;
		  weatherConditionId = data.weather.id;
		  weatherCondition = data.weather.main;
		  weatherDescription = data.weather.description;
		  cityLat = data.coord.lat;
		  cityLon = data.coord.lon;
		  weatherTemp = data.main.temp;
		  maxTemp = data.main.temp_max;
		  minTemp = data.main.temp_min;
		  humidity = data.main.humidity;
		  windSpeed = data.wind.speed;
		  
		  //round all temps
		  weatherTemp = Number(weatherTemp);
		  weatherTemp = Math.round(weatherTemp);
		  
		  maxTemp = Number(maxTemp);
		  maxTemp = Math.round(maxTemp);
		  
		  minTemp = Number(minTemp);
		  minTemp = Math.round(minTemp);
		  
		  condition = assignCondition(weatherConditionId);
		  assignActivities(condition);
		  
		  generateMenu();
		  generateWeatherDetails();
		  generateWeatherMain();
		  generateTwitter();
		 
		  $('.activitySlider').bxSlider(); 
		  $('.pure-g').fadeIn("slow");
	  });
	  
	   
 }
 
//function to assign a condition based on weather ID code to appropriate condition
function assignCondition(weatherConditionId) {
	"use strict";
	switch(weatherConditionId) {
		//assign thunderstorm
		case 200: case 201: case 202: case 210: case 211: case 212: case 221: case 230: case 231: case 232:
			condition = "thunderstorm";
			break;
		//asssign drizzle
		case 300: case 301: case 302: case 310: case 311: case 312: case 313: case 314: case 321: 
			condition = "drizzle";
			break;	
		//assign rain
		case 500: case 501: case 502: case 503: case 504: case 511: case 520: case 521: case 522: case 531: case 960:
			condition = "rain";
			break;
		//assign snow
		case 600: case 601: case 602: case 611: case 612: case 615: case 616: case 620: case 621: case 622: 
			condition = "snow";
			break;
		//assign low visibility
		case 701: case 711: case 721: case 731: case 741: case 751: case 761: case 762: 
			condition = "lowvisibility";
			break;
		//assign clear sky
		case 800: case 951: case 952: case 953: case 954: case 955: 
			condition = "clear";
			break;
		//assign clouds
		case 801: case 802: case 803: case 804:
			condition = "clouds";
			break;
		//assign extreme
		case 900: case 901: case 902: case 903: case 904: case 905: case 906: case 771: case 781: case 961: case 962:
			condition = "extreme";
			break;
		//assign windy	
		case 956: case 957: case 958: case 959: 
			condition = "windy";
			break;			
	}
	return condition;
}

	//assign activities for current conndition
function assignActivities(condition) {

	"use strict";
	switch(condition) {
		case "thunderstorm": case "extreme":
			activity1 = "boardGames";
			activity2 = "read";
			activity3 = "cleanHouse";
			break;
		case "drizzle":
			activity1 = "goShopping";
			activity2 = "cook";
			activity3 = "read";
			break;	
		case "rain":
			activity1 = "write";
			activity2 = "cleanHouse";
			activity3 = "videoGames";
			break;	
		case "snow":
			activity1 = "hotChocolate";
			activity2 = "ski";
			activity3 = "buildSnowman";
			break;	
		case "lowvisibility":
			activity1 = "cleanHouse";
			activity2 = "read";
			activity3 = "cook";
			break;				
		case "clouds":
			activity1 = "read";
			activity2 = "boardGames";
			activity3 = "cook";
			break;		
		case "clear":
			activity1 = "goOutside";
			activity2 = "goShopping";
			activity3 = "flyKite";
			break;
		case "windy":
			activity1 = "goOutside";
			activity2 = "flyKite";
			activity3 = "read";
			break;
	}
} 
	
	
function generateMenu() {
	"use strict";
	$('<div id="menu"></div>').appendTo('.pure-g');
	$('#menu').addClass("pure-u-1");
	$('<a href="../hypeWeather1" class="startOver"><i class="fa fa-caret-square-o-left"></i>Start Over</a>').appendTo('#menu');
	$('<h1 class="cityName">'+cityName+'</h1>').appendTo('#menu');
}

function generateWeatherDetails() {
	"use strict";
	//create Details Table
	$('<div id="detailsContainer"></div>').appendTo('.pure-g');
	$('#detailsContainer').addClass("pure-u-1");
	$('<div id="details"></div>').appendTo('#detailsContainer');
	$('<table id="detailsTable"></table>').appendTo('#details');
	$('<th> '+weatherCondition+' - '+weatherDescription+'</th>').appendTo('#detailsTable');
	$('<th><img id="conditionIcon" src="images/conditionIcons/conditionIcon.svg" alt="Condition Icon"/></th>').appendTo('#detailsTable');
	$('<tr><td>Lat: '+cityLat+'</td><td>Lon: '+cityLon+'</td></tr>').appendTo('#detailsTable');
	$('<tr><td>Temp:</td><td>'+weatherTemp+'&deg; F</td></tr>').appendTo('#detailsTable');
	$('<tr><td>Low: '+minTemp+'&deg; F</td><td>High: '+maxTemp+'&deg; F</td></tr>').appendTo('#detailsTable');
	$('<tr><td>Humidity</td><td>'+humidity+'%</td></tr>').appendTo('#detailsTable');
	$('<tr><td>Wind Speed</td><td>'+windSpeed+' mph</td></tr>').appendTo('#detailsTable');
	
	//add detailsToggle Button
	$('<a href="#" id="detailsToggle">Details</a>').appendTo('#details');
	
	//apply on click to open and cloase the detailsTable
	$('#detailsToggle').click(toggleDetailsMenu);
	$('#detailsTable').click(toggleDetailsMenu);
}

function generateWeatherMain() {
	"use strict";
	$('<div id="weatherMainContainer" class="pure-u-1"></div>').appendTo('.pure-g');
	$('<div id="weatherMain"></div>').appendTo('#weatherMainContainer');
	$('<img id="conditionIcon" src="images/conditionIcons/conditionIcon.svg" alt="Condition Icon"/>').appendTo('#weatherMain');
	$('<p id="temp">'+weatherTemp+'&deg;</p>').appendTo('#weatherMain');
	$('<p id="condition">'+weatherCondition+'</p>').appendTo('#weatherMain');
	$('<p id="hiLo"></p>').appendTo('#weatherMain');
	
	$('<span class="low">'+minTemp+'&deg; / </span>').appendTo('#hiLo');
	$('<span class="high"> '+maxTemp+'&deg;</span>').appendTo('#hiLo');
	
}

function generateTwitter() {
	"use strict";
	$('<div id="twitterContainer"></div>').appendTo('.pure-g');
	$('#twitterContainer').addClass('pure-u-1');
	
	//create the twitter button on weather view
	$('<div id="twitterButton"></div>').appendTo('#twitterContainer');
	$('<span class="twitterIcon"><i class="fa fa-twitter-square"></i></span>').appendTo('#twitterButton');
	$('<span class="twitterButtonText">See what others are doing...</span>').appendTo('#twitterButton');
	
}

function toggleDetailsMenu() {
	"use strict";
	$('#details').toggleClass("detailsOpen");
}
