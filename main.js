var input = document.querySelector('input');
var timeContainer; // zmienna zachowująca datę śmierci
var btn = document.querySelector('button');



// spany z czasem
var days = document.querySelector('span.d');
var hours = document.querySelector('span.h');
var minutes = document.querySelector('span.m');
var seconds = document.querySelector('span.s');
var years = document.querySelector('span.y');

// funkcja licząca
btn.addEventListener('click', function(e) {
    e.preventDefault();
    timeContainer = input.value;
    var timer = setInterval(function() {
        const endTime = new Date(timeContainer).getTime();
        var nowTime = new Date().getTime();
        var y = Math.floor(endTime / (1000 * 60 * 60 * 24 * 365) - nowTime / (1000 * 60 * 60 * 24 * 365));
        var d = Math.floor((endTime / (1000 * 60 * 60 * 24) - nowTime / (1000 * 60 * 60 * 24)) % 365);
        var h = Math.floor((endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24);
        var m = Math.floor((endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60);
        var s = Math.floor((endTime / 1000 - nowTime / 1000) % 60);


        years.textContent = y;
        days.textContent = d;
        hours.textContent = h;
        minutes.textContent = m;
        seconds.textContent = s;

    }, 1000);
})