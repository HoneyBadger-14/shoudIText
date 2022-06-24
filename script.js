var img = "<img src='deep-think-chandler.gif'/>";
var button = "<a class='f4 link ph4 pv3 mb2 dib white bg-black tracked' href='#0' onclick='compute(answer, button)'>Are you sure?</a>";
var count = 0;
const replies = [
    "No.",
    "Don't text.",
    "Don't do it now.",
    "if you are all Medulla Oblangata! then don't text."
];

function shouldIText(click) {
    if (click == true)
        var unsure = true;
    if (unsure == true)
        var sellout = true;
    if (sellout == true)
        var answer = false;
    return answer;
}

function display(html) {
    document.getElementById("main").innerHTML = html;
}

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

function thinkAboutIt(answer) {
    milliseconds = getRandom(1000, 8000);
    setTimeout(function () {
        display(answer)
    }, milliseconds);
}

function getAnswer(count){
    return `<h1 class='f6 f2-m f-subheadline-l fw8 tc b'>${replies[count]}</h1>`;
}

function compute(answer, button) {
    if(count > 3){
        count = 0;
    }
    var click = true;
    if (!shouldIText(click)) {
        display(img);
        answer = getAnswer(count);
        thinkAboutIt(answer + button);
        count++;
    }
}

document.addEventListener("DOMContentLoaded", function (event) {

    var aboutBtnOpen = document.getElementById("ok-open");
    var aboutBtnClose = document.getElementById("ok-close")
    var aboutPage = document.getElementById("page-info");

    aboutBtnOpen.addEventListener('click', function () {
        aboutPage.classList.add("open");
    }, false);

    aboutBtnClose.addEventListener('click', function () {
        aboutPage.classList.remove("open");
    }, false);

});

var answer = `<h1 class='f6 f2-m f-subheadline-l fw8 tc b'>${replies[count]}</h1>`;
