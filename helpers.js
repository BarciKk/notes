import {
  noteCreatorModal,
  displayCreatedNoteModal,
  modal,
} from "./domElements.js";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const formatDate = () => {
  const date = new Date();
  let hours = date.getHours();
  let min = date.getMinutes();
  let day = days[date.getDay()];

  let formatedHours = hours < 10 ? `0${hours}` : hours;
  let formatedMin = min < 10 ? `0${min}` : min;
  let formatedDay = day < 10 ? `0${day}` : day;

  return `${formatedDay}, ${formatedHours}:${formatedMin}`;
};
const errorMessage = "You have to add at least title !";

const toogleCreatorModal = () => {
  modal.style.display = modal.style.display === "block" ? "none" : "block";
  if (modal.style.display === "block") {
    noteCreatorModal.style.display = "block";
    displayCreatedNoteModal.style.display = "none";
  } else {
    noteCreatorModal.style.display = "none";
    displayCreatedNoteModal.style.display = "none";
  }
};

export { formatDate, errorMessage, toogleCreatorModal };
