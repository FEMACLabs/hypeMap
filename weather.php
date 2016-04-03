<!doctype html>
<html>
<head>
    <meta charset="utf-8">    
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Weather State Build</title>
    
    <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css">
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <link href="css/jquery.bxslider.css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="css/site.css">
</head>

<body>

<div class="container">
	<div class="pure-g">
    	<div class="pure-u-1" id="menu">
        	<a href="../hypeWeather1" class="startOver"><i class="fa fa-caret-square-o-left"></i>Start Over</a>
            <h1 class="cityName">Orlando</h1>
        </div>
        <div class="pure-u-1" id="detailsContainer">
            <div id="details">
            	<table id="detailsTable">
                	<th> Main - description</th>
                    <th><img id="conditionIcon" src="images/conditionIcons/conditionIcon.svg" alt="Condition Icon"/></th>
                    <tr>
                    	<td>Lat: 444</td>
                        <td>Lon: 00</td>
                    </tr>
                    <tr>
                    	<td>Temp:</td>
                        <td>55&deg; F</td>
                    </tr>
                    <tr>
                    	<td>Low: 44&deg; F</td>
                        <td>High: 44&deg; F</td>
                    </tr>
                    <tr>
                    	<td>Humidity</td>
                        <td>55%</td>
                    </tr>
                    <tr>
                    	<td>Wind Speed</td>
                        <td>55 mph</td>
                    </tr>
                </table>
                <a href="#" id="detailsToggle">Details</a>
            </div>
            
        </div>
        <div id="weatherMainContainer" class="pure-u-1">
            <div id="weatherMain">
                <img id="conditionIcon" src="images/conditionIcons/conditionIcon.svg" alt="Condition Icon"/>
                <p id="temp">82&deg;</p>
                <p id="condition">Sunny</p>
                <p id="hiLo"><span class="low">72&deg;</span> / <span class="high">93&deg;</span></p>
            </div>
        </div>
        <div id="twitterContainer" class="pure-u-1">
            <div id="twitterButton">
                <span class="twitterIcon"><i class="fa fa-twitter-square"></i></span>
                <span class="twitterButtonText">See what others are doing...</span>
            </div>
        </div>
        <div class="pure-u-1" id="activities">
            <div id="activities">
                <ul class="activitySlider">
                  <li>
                    <div id="activity1">
                        <img class="activityImg" src="https://www.fillmurray.com/g/100/100" alt="activity1img">
                        <div class="activityDesc">
                            <h3>Go fLy a kite!</h3>
                            <p>Kites are fun, kites are great... now go fly a kite.</p>
                         </div>
                    </div>
                  </li>
                  <li>
                    <div id="activity2">
                        <img class="activityImg" src="https://www.fillmurray.com/g/100/100" alt="activity1img">
                        <div class="activityDesc">
                            <h3>Go fLy a kite!</h3>
                            <p>Kites are fun, kites are great... now go fly a kite.</p>
                         </div>
                    </div>
                  </li>
                  <li>
                    <div id="activity3">
                        <img class="activityImg" src="https://www.fillmurray.com/g/100/100" alt="activity1img">
                        <div class="activityDesc">
                            <h3>Go fLy a kite!</h3>
                            <p>Kites are fun, kites are great... now go fly a kite.</p>
                         </div>
                    </div>
                  </li>
                </ul>
            </div>
        </div>
    </div>
</div>
	
</div>

</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
<script src="js/jquery.bxslider.min.js"></script>
<script src="js/weather.js"></script>
</html>