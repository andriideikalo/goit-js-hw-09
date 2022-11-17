import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"
import Notiflix from 'notiflix';

// console.log(flatpickr)

// const ms = 3000



const refs = {
        input: document.querySelector('#datetime-picker'),
        btnStart: document.querySelector('button[data-start]'),
        days: document.querySelector('span[data-days]'),
        hours: document.querySelector('span[data-hours]'),
        minutes: document.querySelector('span[data-minutes]'),
        seconds: document.querySelector('span[data-seconds]'),
    }
    // console.log(btnStart)
    // console.log(days)
    // console.log(hours)
    // console.log(minutes)
refs.btnStart.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] - new Date() < 0) {
            Notiflix.Notify.failure('Please choose a date in the future');
            return;
        }

        refs.btnStart.disabled = false;


        function convertMs(ms) {
            // Number of milliseconds per unit of time
            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;
            const day = hour * 24;

            // Remaining days
            const days = Math.floor(ms / day);
            // Remaining hours
            const hours = Math.floor((ms % day) / hour);
            // Remaining minutes
            const minutes = Math.floor(((ms % day) % hour) / minute);
            // Remaining seconds
            const seconds = Math.floor((((ms % day) % hour) % minute) / second);

            return { days, hours, minutes, seconds };
        }

        // console.log(convertMs(ms)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
        refs.btnStart.addEventListener('click', () => {
            // console.log(convertMs(ms)); // {days: 0, hours: 0, minutes: 0, seconds: 2}

            setInterval(() => {
                const ms = selectedDates[0] - new Date();

                if (ms <= 0) {
                    return;
                }
                const { days, hours, minutes, seconds } = convertMs(ms);
                refs.days.textContent = `${days}`.padStart(2, '0')
                refs.hours.textContent = `${hours}`.padStart(2, '0')
                refs.minutes.textContent = `${minutes}`.padStart(2, '0')
                refs.seconds.textContent = `${seconds}`.padStart(2, '0')
                    // console.log(refs.seconds)
            }, 1000);
            refs.btnStart.disabled = true;
        });
    }
};
flatpickr(refs.input, options);