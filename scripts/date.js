function DateTimeRefresh()
{
    const display = document.getElementById("datetime");

    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 6;
    let dd = today.getDate();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    // if (dd < 10) dd = '0' + dd;
    // if (mm < 10) mm = '0' + mm;

    const formatted = dd + '.' + mm + '.' + yyyy + " | " + hours + ':' + minutes + ':' + seconds;
    display.textContent = formatted;
}
setInterval(DateTimeRefresh, 1000);