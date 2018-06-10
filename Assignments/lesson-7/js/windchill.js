<!DOCTYPE HTML>
<html lang="en-us">
<head>
<meta charset="utf-8">
<title>WindChillFactor</title>

<script type="text/javascript">
    
function doInputOutput() {
    let high = document.getElementById("high").innerHTML;
    let low = document.getElementById("low").innerHTML;
    let wind = document.getElementById("wind").innerHTML;
    let theaverage = high + low / 2;
    return = theaverage;
    var result= windChillFactor(theaveage, wind);
    document.getElementById('output').innerHTML = result;
    
    
}
function windChillFactor(theaverage, wind){
     var factor = 35.74 + (0.6215 * theaverage) - 35.75 * (Math.pow(wind,0.16)) + (0.4275 * theaverage) * (Math.pow(wind,0.16));
     return factor;
    
    
}    
    
</script>
</head>

<body> 
<button type="button" onclick="doInputOutput()">Wind Chill</button>
<div id="output"></div>  
</body>
</html>