<!DOCTYPE html>
<html lang="en-us">
        <head>
          <meta charset="utf-8">
          <title>Date</title>
              <script type="text/javascript">
            tday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
            tmonth=new Array("January","February","March","April","May","June","July","August","September","October","November","December");

            function GetClock(){
                var d=new Date();
                var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getFullYear();

                document.getElementById('clockbox').innerHTML=""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+", "+nyear+"";
}

            window.onload=function(){
                GetClock();
                setInterval(GetClock,1000);
            }
            </script>
            <div id="clockbox"></div>
        </div>
    </head>
</html>
