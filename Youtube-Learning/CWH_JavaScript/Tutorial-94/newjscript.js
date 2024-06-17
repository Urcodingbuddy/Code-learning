document.addEventListener('DOMContentLoaded', () => {
    const hoursDropdown = document.getElementById('hours');
    const minutesDropdown = document.getElementById('minutes');
    const ampmDropdown = document.getElementById('ampm');
    const selectedTimeDisplay = document.getElementById('selected-time');
    const toggleAlarmButton = document.getElementById('setalarm');
    let alarmTime = null;
    let alarmInterval = null;
    let alarmSet = false;

    // Populate hours dropdown
    for (let i = 1; i <= 12; i++) {
        let option = document.createElement('option');
        option.value = i < 10 ? '0' + i : i;
        option.textContent = i;
        hoursDropdown.appendChild(option);
    }

    // Populate minutes dropdown
    for (let i = 0; i < 60; i++) {
        let option = document.createElement('option');
        option.value = i < 10 ? '0' + i : i;
        option.textContent = i < 10 ? '0' + i : i;
        minutesDropdown.appendChild(option);
    }

    // Event listener to display the selected time
    function updateSelectedTime() {
        const selectedHour = hoursDropdown.value;
        const selectedMinute = minutesDropdown.value;
        const selectedAmPm = ampmDropdown.value;
        selectedTimeDisplay.textContent = `Selected time: ${selectedHour}:${selectedMinute} ${selectedAmPm}`;
        alarmTime = `${selectedHour}:${selectedMinute} ${selectedAmPm}`;
        ampmDropdown.value = selectedAmPm
    }

    // Add event listeners to the dropdowns
    hoursDropdown.addEventListener('change', updateSelectedTime);
    minutesDropdown.addEventListener('change', updateSelectedTime);
    ampmDropdown.addEventListener('change', updateSelectedTime);

    // Function to play alarm sound
    function play() {
        var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
        audio.play();
    }

    // Function to check current time against the alarm time
    function checkAlarm() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        if (hours > 12) {
            hours -= 12;
        } else if (hours === 0) {
            hours = 12;
        }

        const formattedHours = hours < 10 ? '0' + hours : hours;
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        const currentTime = `${formattedHours}:${formattedMinutes} ${ampm}`;

        if (alarmTime === currentTime) {
            play();
            clearInterval(alarmInterval); // Stop checking after alarm rings
            alarmSet = false;
            toggleAlarmButton.textContent = "Start";
        }
    }

    // Toggle the alarm
    toggleAlarmButton.addEventListener('click', () => {
        if (alarmSet) {
            // Reset the alarm
            clearInterval(alarmInterval);
            alarmSet = false;
            toggleAlarmButton.textContent = "Start";
            selectedTimeDisplay.textContent = "Selected time: --:-- --";
            alarmTime = null;
        } else {
            // Set the alarm
            if (alarmTime) {
                alarmInterval = setInterval(checkAlarm, 1000); // Check every second
                alarmSet = true;
                toggleAlarmButton.textContent = "Stop";
                // alert(`Alarm set for ${alarmTime}`);
            } else {
                alert('Please select a valid time to set the alarm.');
            }
        }
    });
});




setInterval(() => {
    let a = new Date();
    let hours = a.getHours();
    let minutes = a.getMinutes();
    let seconds = a.getSeconds();
    let setampm = hours >= 12 ? 'PM' : 'AM';

    if (hours === 0) {
        hours = 12;
    } else if (hours > 12) {
        hours = hours - 12;
    }



    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;



    var innertime = `${hours}:${minutes}:${seconds}`;
    let innerampm = `${setampm}`;
    let ampm = document.getElementById('ampm');
    ampm.innerText = innerampm;


    let clock = document.getElementById('time');
    clock.innerText = innertime;
}, 1000);