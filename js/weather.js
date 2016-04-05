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

var title;
var desc;

$(document).ready(function() {
	"use strict";
  $('#citySelect').bind('keyup', function(e) {
	if ( e.keyCode === 13 ) { // 13 is enter key
		citySearch();
	  }
  
  });
  
  $('#citySubmit').click(citySearch);
  
  
  
  function citySearch() {
	  var citySelection = $("#citySelect").val();
		$('.container').fadeOut("slow", function() {
			$('.pure-g').empty();
			
			listSearch(citySelection);
			
			
		});	
	} 
	
	$('.activitySlider').bxSlider();
	
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
		  generateActivitySlides();
		  $('.activitySlider').bxSlider();
		  
		  $("body").addClass("bg1");
	  });
	
	  
	   $('.container').fadeIn("slow");
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
	$('<a href="../hypeWeather1" class="startOver appButton"><i class="fa fa-caret-square-o-left"></i>Start Over</a>').appendTo('#menu');
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
	$('<th><img id="conditionIcon" src="images/conditionIcons/'+condition+'.svg" alt="Condition Icon"/></th>').appendTo('#detailsTable');
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
	$('<img id="conditionIcon" src="images/conditionIcons/'+condition+'.svg" alt="Condition Icon"/>').appendTo('#weatherMain');
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

function generateActivitySlides() {
	"use strict";
	$('<div id="activitiesContainer"></div>').appendTo('.pure-g');
	$('#activitiesContainer').addClass("pure-u-1");
	
	$('<div id="activities"></div>').appendTo('#activitiesContainer');
	
	$('<ul class="activitySlider"></ul>').appendTo('#activities');
	
	//add activity 1
	assignTitle(activity1);
	assignDesc(activity1);
	$('<div id="activity1"></div>').appendTo('.activitySlider');
	//img
	$('<img class="activityImg" src="https://www.fillmurray.com/g/100/100" alt="activity1img">').appendTo('#activity1');
	//description
	$('<div id="activity1Desc">').appendTo('#activity1');
	$('#activity1Desc').addClass('activityDesc');
	$('<h3>'+title+'</h3>').appendTo('#activity1Desc');	
	$('<p>'+desc+'</p>').appendTo('#activity1Desc');
	
	
	//add activity 2
	assignTitle(activity2);
	assignDesc(activity2);
	$('<div id="activity2"></div>').appendTo('.activitySlider');
	//img
	$('<img class="activityImg" src="https://www.fillmurray.com/g/100/100" alt="activity1img">').appendTo('#activity2');
	//description
	$('<div id="activity2Desc">').appendTo('#activity2');
	$('#activity2Desc').addClass('activityDesc');
	$('<h3>'+title+'</h3>').appendTo('#activity2Desc');	
	$('<p>'+desc+'</p>').appendTo('#activity2Desc');
	
	//add activity 2
	assignTitle(activity3);
	assignDesc(activity3);
	$('<div id="activity3"></div>').appendTo('.activitySlider');
	//img
	$('<img class="activityImg" src="https://www.fillmurray.com/g/100/100" alt="activity1img">').appendTo('#activity3');
	//description
	$('<div id="activity3Desc">').appendTo('#activity3');
	$('#activity3Desc').addClass('activityDesc');
	$('<h3>'+title+'</h3>').appendTo('#activity3Desc');	
	$('<p>'+desc+'</p>').appendTo('#activity3Desc');

}

//assign a title based on activity
    function assignTitle(activity) {
		"use strict";
        switch(activity) {
            case "boardGames":
                title = "Play a Board Game!";
                return title;
            case "read":
                title = "Go Read!";
                return title;
            case "cleanHouse":
                title = "Clean Your House!";
                return title;
            case "goShopping":
                title = "Go Shopping!";
                return title;
            case "cook":
                title = "Cook Something!";
                return title;
            case "write":
                title = "Write Something!";
                return title;
            case "videoGames":
                title = "Play Some Video Games!";
                return title;
            case "hotChocolate":
                title = "Drink Some Hot Chocolate!";
                return title;
            case "ski":
                title = "Go Skiing!";
                return title;
            case "buildSnowman":
                title = "Build a Snowman!";
                break;
            case "goOutside":
                title = "Get Outside!";
                break;
            case "flyKite":
                title = "Go Fly a Kite!";
                return title;								
        }
    }
	
	//assign a description based on activity
    function assignDesc(activity) {
		"use strict";
        switch(activity) {
            case "boardGames":
                desc = "Board games are a great way to pass some time with friends! Grab your favorite and get playing.";
                return desc;
            case "read":
                desc = "Some say you're defined by the people you associate with and the books you read. Start reading a great book!";
                return desc;
            case "cleanHouse":
                desc = "Chances are there is something in your house or apartment that needs to be cleaned. Get to it!";
                return desc;
            case "goShopping":
                desc = "It's a perfect day to go shopping and spend some of your hard earned cash. Pick up something for me!";
                return desc;
            case "cook":
                desc = "Learn about a new recipe, then mess it up! Add a new meal to your arsenal.";
                return desc;
            case "write":
                desc = "Try your hand at some writing then put it online! You never know who will see your work.";
                return desc;
            case "videoGames":
                desc = "Video games are a great way to waste a day away. Go rent a new game or dust off an old favorite!";
                return desc;
            case "hotChocolate":
                desc = "Baby, it's cold outside! Grab a blanket and fill up with some hot chocolate.";
                return desc;
            case "ski":
                desc = "Go tear up that mountain and test that new powder bruh! Avalanche!";
                return desc;
            case "buildSnowman":
                desc = "Building a man of snow is an old favorite on a snowey day. Go build one and post it online!";
                return desc;
            case "goOutside":
                desc = "Get off your tuckus and go for a hike, bike ride, or whatever. Just go outside and get your blood flowing!";
                return desc;
            case "flyKite":
                desc = "It's windy enough to fly a kite outside and excite your inner child. Grab one and get going.";
                return desc;								
        }
    }
    

function toggleDetailsMenu() {
	"use strict";
	$('#details').toggleClass("detailsOpen");
}
