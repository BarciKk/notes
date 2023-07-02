const formatDate = () => {
  const date = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let hours = date.getHours();
  let min = date.getMinutes();
  let day = days[date.getDay()];

  let formatedHours = hours < 10 ? `0${hours}` : hours;
  let formatedMin = min < 10 ? `0${min}` : min;
  let formatedDay = day < 10 ? `0${day}` : day;

  return `${formatedDay}, ${formatedHours}:${formatedMin}`;
};
