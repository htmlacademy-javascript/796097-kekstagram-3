// convertTimeToMinutes переводит часы в минуты, складывает результат с минутами. получаем количество минут от начала дня
const convertTimeToMinutes = (notFormattedTime) => {
  let [hoursInMinutes, minutes] = notFormattedTime.split(':', 2);
  hoursInMinutes = +hoursInMinutes * 60;
  minutes = +minutes;

  return (hoursInMinutes + minutes);
};

const isTimeInLimit = (startWork, endWork, startMeet, duration) => {
  const formattedStartWork = convertTimeToMinutes(startWork);
  const formattedStartMeet = convertTimeToMinutes(startMeet);
  const formattedEndWork = convertTimeToMinutes(endWork);
  return formattedEndWork >= formattedStartMeet + duration && formattedStartMeet >= formattedStartWork;
};

// isTimeInLimit('Начало рабочего дня', 'Конец рабочего дня', 'Начало встречи', длительность встречи);
let testIsTimeInLimit = isTimeInLimit('08:00', '17:30', '14:00', 90);
window.console.log(testIsTimeInLimit);
testIsTimeInLimit = isTimeInLimit('8:0', '10:0', '8:0', 120);
window.console.log(testIsTimeInLimit);
testIsTimeInLimit = isTimeInLimit('08:00', '14:30', '14:00', 90);
window.console.log(testIsTimeInLimit);
testIsTimeInLimit = isTimeInLimit('14:00', '17:30', '08:0', 90);
window.console.log(testIsTimeInLimit);
testIsTimeInLimit = isTimeInLimit('8:00', '17:30', '08:00', 900);
window.console.log(testIsTimeInLimit);
testIsTimeInLimit = isTimeInLimit('8:00', '17:30', '060:00', 90);
window.console.log(testIsTimeInLimit);
