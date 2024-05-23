let output;
let inputDate;

function showDaysCount() {
    let today = new Date();
    inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    daysCount = Math.floor(daysCount);

    output = document.getElementById('output');
    output.style.transition = 'opacity 1s';
    output.style.opacity = '1';
    output.innerHTML = 'Количество дней с даты рождения: ' + daysCount;
}

function clearArea() {
    output.style.opacity = '0';
    output.innerHTML = '';
    inputDate.value = '';
}