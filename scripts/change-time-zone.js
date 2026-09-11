import MicroModal from "micromodal";

MicroModal.init();

//get timezone button
const timezoneButton = document.getElementById("open-timezone-window");

timezoneButton.addEventListener("click", function(){
    MicroModal.show("modal-1");
});

//will handle timezone selection
document.querySelectorAll("timezone-option").forEach(button => {
    button.addEventListener("click", function(){
        const selectedTimezone = this.getAttribute("data-timezone");

        //current-time.js will use this
        window.selectedTimezone = selectedTimezone;
        MicroModal.close("modal-1");
    });
});