<!doctype html>
<html>
<head>
    <meta charset="utf-8">    
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Hype Map</title>
    
    <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css">
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css">
    <link rel="stylesheet" type="text/css" href="css/site.css">
</head>

<body>
    <div class="pure-g">
    	<div class="pure-u-1">
        	<img src="images/logo.svg" alt="Hype Map Logo" id="logo">
        </div>
        <div class="pure-u-1">
        	<form class="pure-form pure-form-stacked">
                <fieldset>
                	<img id="stateIcon" src="images/stateIcons/testState.svg">
                    <select name="citySelect" id="citySelect">
                    	<option value="orlando">Orlando</option>
                        <option value="newYork">New York</option>
                        <option value="sanFrancisco">San Fransisco</option>
                        <option value="houston">Houston</option>
                        <option value="denver">Denver</option>
                    </select>
                    <button type="submit" class="pure-button pure-button-primary">Submit</button>
                </fieldset>
            </form>
        </div>
     </div>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
<script src="js/weather.js"></script>
</html>