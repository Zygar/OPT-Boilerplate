var $ = require("jquery");

$(document).ready(function(){
    console.log("Boilerplate initialized!");
    $("h1").on("click", function(){(alert("hi"))});
    console.log(window.Modernizr, window.jQuery)
})
