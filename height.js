// Change the height of more-stories-section to be in 
// same position with sponsored-features-section
// in order to get proper horizontal scoll effect
// with postion sitcky

var sponsored = document.getElementById("sponsored1");
var moreStories = document.getElementById("helper-stretch");
var bottomLine = sponsored.offsetHeight + sponsored.offsetTop;
var heightPx = (bottomLine - moreStories.offsetTop - 20) + "px";        

function addHeight(x) {
if (x.matches) {
    moreStories.style.height = heightPx;
} else {
    moreStories.style.height = "100%";
}
}

var x = window.matchMedia("(min-width: 768px)");
addHeight(x);
x.addListener(addHeight);