<?php include ("includes/cityWeather.php");?>
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
    <div class="pure-g">
          <div class="pure-u-1">
              <img src="images/logo.svg" alt="Hype Map Logo" id="logo">
          </div>
          <div class="pure-u-1">
              <form class="pure-form pure-form-stacked">
                  <fieldset>
                      <div class="citySelectWrapper">
                          <img id="stateIcon" src="images/stateIcons/testState.svg">
                          <select name="citySelect" id="citySelect">
                              <option value="orlando">Orlando</option>
                              <option value="newYork">New York</option>
                              <option value="sanFrancisco">San Fransisco</option>
                              <option value="houston">Houston</option>
                              <option value="denver">Denver</option>
                          </select>
                      </div>
                      <a href="#" id="citySubmit" class="pure-button pure-button-primary appButton">Submit</a>
                  </fieldset>
              </form>
          </div>
     </div>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
<script src="js/jquery.bxslider.min.js"></script>
<script src="js/weather.js"></script>
</html>