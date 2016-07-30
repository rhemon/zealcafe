$('.carousel').carousel({
  interval: 5000
});

function showCarousel() {
    $("#whoAreWe").hide();
    $("#whatWeProvide").hide();
    $("#contactUs").hide();
    $("#carousel").show();
}

function showWAE() {
    $("#carousel").hide();
    $("#whatWeProvide").hide();
    $("#contactUs").hide();
    $("#whoAreWe").show();
}

function showWWP() {
    $("#carousel").hide();
    $("#contactUs").hide();
    $("#whoAreWe").hide();
    $("#whatWeProvide").show();
}

function showCU() {
    $("#carousel").hide();
    $("#whoAreWe").hide();
    $("#whatWeProvide").hide();
    $("#contactUs").show();
}

function showCoffee() {
    $("#teaText").hide();
    $("#machineText").hide();
    $("#coffeeText").show();
    $("#teaNav").removeClass("active");
    $("#machNav").removeClass("active");
    $("#coffeeNav").addClass("active");

}
function showTea() {
    $("#coffeeText").hide();
    $("#machineText").hide();
    $("#teaText").show();
    $("#coffeeNav").removeClass("active");
    $("#machNav").removeClass("active");
    $("#teaNav").addClass("active");
}
function showMachine() {
    $("#coffeeText").hide();
    $("#teaText").hide();
    $("#machineText").show();
    $("#teaNav").removeClass("active");
    $("#coffeeNav").removeClass("active");
    $("#machNav").addClass("active");
}
