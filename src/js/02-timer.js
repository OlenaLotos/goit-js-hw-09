// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

const input = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');

const currentDate = Date.now();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
      if (selectedDates[0] < currentDate) {
        Notify.failure('Please choose a date in the future', {
        position: 'center-top',
      });
    //   window.alert('Please choose a date in the future');
        
    } else {
      startButton.disabled = false;
      startButton.addEventListener('click', timer(selectedDates[0]));
    }
  },
};

flatpickr(input, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day).padStart(2, '0');
  // Remaining hours
  const hours = Math.floor((ms % day) / hour).padStart(2, '0');
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute).padStart(2, '0');
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second).padStart(2, '0');

    console.log(
    `days: ${days}, hours: ${hours}, minutes: ${minutes}, seconds: ${seconds}`
  );
  return { days, hours, minutes, seconds };
}

const showTime = (days, hours, minutes, seconds) => {
  document.querySelector('span[data-days]').textContent = days;
  document.querySelector('span[data-hours]').textContent = hours;
  document.querySelector('span[data-minutes]').textContent = minutes;
  document.querySelector('span[data-seconds]').textContent = seconds;
};

const timer = selectedDate => {
  setInterval(() => {
    const ms = selectedDate - new Date();
    let result = convertMs(ms);
    showTime(result.days, result.hours, result.minutes, result.seconds);
  }, 1000);
};

