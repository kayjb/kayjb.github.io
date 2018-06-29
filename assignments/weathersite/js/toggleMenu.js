 function toggleHam() {
    var x = document.getElementById("navigation");
    if (x.className === "hide") {
        x.className += " responsive";
    } 
    else {
        x.className = "topnav";
    }
}