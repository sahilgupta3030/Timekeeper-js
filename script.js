function clock() {

    let hour = document.getElementById("hour");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");
    let ampm = document.getElementById("ampm");

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    var am = 'AM';

    if (h > 12) {
        h = h - 12;
        am = 'PM';
    }

    if (h < 10) {
        h = '0' + h;
    }

    if (m < 10) {
        m = '0' + m;
    }

    if (s < 10) {
        s = '0' + s;
    }

    hour.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;

}
var interval = setInterval(clock, 1000)

