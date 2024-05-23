function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = currentTime;

    let currentSecond = today.getSeconds();
    document.getElementById('seconds').innerHTML =
        currentSecond < 10 ? '0' + currentSecond : currentSecond;
}
setInterval(showTime, 1000);