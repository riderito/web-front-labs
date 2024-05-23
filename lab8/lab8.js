let today = new Date();

function showDate() {
    const out = document.getElementsByClassName('current-date');
    out[0].innerHTML = 'Дата и время для русской локали: ' + today.toLocaleString('ru-RU');
    out[1].innerHTML = 'Дата и время для локали Кувейта: ' + today.toLocaleString('ar-KW');
    out[2].innerHTML = 'Дата и время для испанской локали: ' + today.toLocaleString('ca-ES');
    out[3].innerHTML = 'Дата и время для австралийской локали: ' + today.toLocaleString('en-AU');
    out[4].innerHTML = 'Дата и время для локали Ирана: ' + today.toLocaleString('fa-IR');
    out[5].innerHTML = 'Дата и время для локали Израиля: ' + today.toLocaleString('he-IL');
}

function showCurrent() {
    let currentYear = document.getElementById('current-year');
    let currentMonth = document.getElementById('current-month');
    let currentDate = document.getElementById('current-date');
    let currentDay = document.getElementById('current-day');

    let year = today.getFullYear();
    currentYear.innerHTML = 'Текущий год: ' + year;

    const yearMonths = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август",
        "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    let month = today.getMonth();
    currentMonth.innerHTML = 'Текущий месяц: ' + yearMonths[month];

    let date = today.getDate();
    currentDate.innerHTML = 'Текущая дата: ' + date;

    let day = today.getDay();
    const weekDays = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    currentDay.innerHTML = 'День недели: ' + weekDays[day];
}

function showDay() {
    let datenumber = parseInt(document.getElementById('datenumber').value);
    let monthnumber = parseInt(document.getElementById('monthnumber').value);
    let yearnumber = parseInt(document.getElementById('yearnumber').value);

    let output = document.getElementById('output');

    let ourdate = new Date(yearnumber, monthnumber-1, datenumber);
    let dayofweek = ourdate.getDay();
    const weekDays = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

    output.style.opacity = '1';
    output.innerHTML = 'День недели ' + datenumber + '.' + monthnumber + '.' + yearnumber + ': ' + weekDays[dayofweek];
}