const dateTime = document.querySelector('#time');

function updateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true};
    const formattedDateTime = now.toLocaleDateString('es-CO', options);

    dateTime.textContent = formattedDateTime;
}

updateTime();

setInterval(updateTime, 1000);