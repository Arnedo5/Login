//DEMO - https://jsfiddle.net/311aLtkz/

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

if (isIE == true){
    console.log("INTERNET EXPLORER");
} else {
    console.log("Nop");
}