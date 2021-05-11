// Carter Bell CIS233 Final
//countDown.js

var seconds = 4 * 60 * 60;
window.onload = init;

function init() {
    beginCountDown();
    setInterval(beginCountDown, 1000);
}

function beginCountDown() {
    seconds--;
    var secs = seconds % 60;
    var mins = Math.floor(seconds / 60 % 60);
    var hours = Math.floor(seconds / 60 / 60);

    document.getElementById('countDown').innerHTML = hours + 'h ' + mins + 'm ' + secs + 's';
}
