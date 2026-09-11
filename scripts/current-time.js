

//plugins for time and time zone
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

//this the function for the time of the current timezone selected
function currentTime(){
    const hrs = document.getElementById("hrs");
    const mins = document.getElementById("mins");
    const secs = document.getElementById("secs");

    hrs.textContent = dayjs().format("hh");
    mins.textContent = dayjs().format("mm");
    secs.textContent = dayjs().format("ss A");
}

setInterval(currentTime, 1000);//will update time every millisecond
currentTime(); //displays

//this is the function for the date of the current timezone selected
function currentDate(){
    const date = document.getElementById("date");

    date.textContent = dayjs().format("dddd, D MMMM, YYYY");
}

currentDate(); //displays

function currentTimezone(){ //current timezone 
    const timezone = document.getElementById("open-timezone-window");

    timezone.textContent = dayjs.tz.guess();
}
currentTimezone();

function updateTimezone(){
    
    let currentTimezone = dayjs.tz.guess();
    const tz = window.selectedTimezone || currentTimezone;

}

updateTimezone();