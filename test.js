
window.onload = function() {

var b = document.getElementsByClassName("home-categories-main");
for(i=0; i<b.length; i++){
b[0].innerHTML = "Blahh All Travel Designers";
b[i].style.letterSpacing = "2px";
b[i].style.fontSize = "13px";
}

var c = document.getElementById("filters");
c.style.letterSpacing = "1.5px";
c.style.fontSize = "11px";

c = document.getElementsByClassName("home-toolbar-button-group");
if(c.length > 0){
c[0].innerHTML = "";}

var d = document.getElementsByClassName("home-list-title");
for(i=0; i<d.length; i++){
d[i].style.letterSpacing = "2px";
d[i].style.fontSize = "18px";
d[i].style.textDecoration = "none solid rgb(72, 72, 72)";
}

var e = document.getElementsByTagName("BUTTON");
for(i=0; i<e.length; i++){
   if(e[i].innerHTML == "Update view"){e[i].style.backgroundColor = "#DC3D24";}
}

// Listing Page
//var a = document.getElementsByClassName("listing-price-amount");
//a[0].style.fontSize = "16px";
//a[0].style.letterSpacing = "2px";

}
