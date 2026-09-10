

//plugins for time and time zone
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

function currentTime(){
    const hrs = document.getElementById("hrs");
    const mins = document.getElementById("mins");
    const secs = document.getElementById("secs");

    hrs.textContent = dayjs().format("hh");
    mins.textContent = dayjs().format("mm");
    secs.textContent = dayjs().format("ss A");

}

setInterval(currentTime, 1000);
currentTime();