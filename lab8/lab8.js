function showDate() {
    const out = document.getElementsByClassName('current-date');
    let today = new Date();
    out[0].innerHTML = 'Дата и время для русской локали: ' + today.toLocaleString('ru-RU');
    out[1].innerHTML = 'Дата и время для локали Кувейта: ' + today.toLocaleString('ar-KW');
    out[2].innerHTML = 'Дата и время для испанской локали: ' + today.toLocaleString('ca-ES');
    out[3].innerHTML = 'Дата и время для австралийской локали: ' + today.toLocaleString('en-AU');
    out[4].innerHTML = 'Дата и время для локали Ирана: ' + today.toLocaleString('fa-IR');
    out[5].innerHTML = 'Дата и время для локали Израиля: ' + today.toLocaleString('he-IL');
}