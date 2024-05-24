function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = currentTime;

    let currentSecond = today.getSeconds();
    document.getElementById('seconds').innerHTML =
        currentSecond < 10 ? '0' + currentSecond : currentSecond;
    
    let sec = 180+(currentSecond* 6);
    let arrow = document.getElementById('arrow');
    arrow.style.transform = `rotate(${sec}deg) translate(0, 50px)`;
    arrow.style.transition = 'transform 1s';

}
setInterval(showTime, 1000);