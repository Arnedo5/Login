//DEMO - https://jsfiddle.net/311aLtkz/

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

if (isIE == false) {
    console.log("NO Internet explorer");
} else {
    console.log("YES Internet explorer");
}



if (isIE == false) {
    console.log("rotate");
    $('.transform').animate({
        height: "toggle",
        opacity: "toggle"
    }, "slow");
}
$('.message a, .continue').click(function () {
    $('.transform').animate({
        height: "toggle",
        opacity: "toggle"
    }, "slow");
});