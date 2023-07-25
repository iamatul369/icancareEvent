// Event Timer Script
const eventDate = new Date(2023, 7, 13, 6); // Replace with your event date
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

function updateCountdown() {
  const currentDate = new Date();
  const timeDifference = eventDate - currentDate;

  if (timeDifference > 0) {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    daysElement.textContent = days + ' days';
    hoursElement.textContent = hours + ' hours';
    minutesElement.textContent = minutes + ' minutes';
    secondsElement.textContent = seconds + ' seconds';
  } else {
    daysElement.textContent = 'Event has started!';
    hoursElement.textContent = '';
    minutesElement.textContent = '';
    secondsElement.textContent = '';
  }
}

setInterval(updateCountdown, 1000);



function showSchedule(day) {
  let list = { 'day1': 'd1', 'day2': 'd2', 'day3': 'd3' };
  const allSchedules = document.querySelectorAll('.day-schedule');
  allSchedules.forEach(schedule => {
    schedule.classList.remove('active');
  });

  const allSchedulesDay = document.querySelectorAll('.selectedDay');
  allSchedulesDay.forEach(schedule => {
    schedule.classList.remove('selected-color');
  });

  const selectedSchedule = document.getElementById(day);
  selectedSchedule.classList.add('active');

  const selDiv = document.getElementById(list[day]);
  selDiv.classList.add('selected-color');
}

const amt = document.getElementById('amount');

const scholar = document.getElementById('scholar');
const room = document.getElementById('room');
const dayopt = document.querySelectorAll('input[name="day"]');

scholar.addEventListener('change', function () {
  const selscholar = scholar.value ==='N' ? 27000 : 0;
  const roomNo = room.value === 'twin' ? 4400 : 6600;
  const selDay = parseInt(document.querySelector('input[name="day"]:checked').value);
  amt.textContent = selscholar + (roomNo * selDay);
  console.log(selscholar + (roomNo * selDay));
});

room.addEventListener('change', function () {
  const selscholar = scholar.value ==='N' ? 27000 : 0;
  const roomNo = room.value === 'twin' ? 4400 : 6600;
  const selDay = parseInt(document.querySelector('input[name="day"]:checked').value);
  amt.textContent = selscholar + (roomNo * selDay);
  console.log(selscholar + (roomNo * selDay));

});

dayopt.forEach(radio => {
  radio.addEventListener('change', function () {
    const selscholar = scholar.value ==='N' ? 27000 : 0;
  const roomNo = room.value === 'twin' ? 4400 : 6600;
  const selDay = parseInt(document.querySelector('input[name="day"]:checked').value);
  amt.textContent = selscholar + (roomNo * selDay);
  console.log(selscholar + (roomNo * selDay));

  });
});