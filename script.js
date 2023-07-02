const addNewNoteButton = document.querySelectorAll(".add-note-button");
const modal = document.querySelector(".modal");
const backArrowModal = document.querySelector(".arrow-back-modal");
const noteContainer = document.querySelector(".greeting-stuff");
const saveNote = document.querySelector(".save-note");
const noteTitle = document.querySelector(".title-note");
const noteValue = document.querySelector(".note-text-holder");

let noteData = [];

const addNewNote = () => {
  if (noteTitle.value === "") return;
  const formatedDate = formatDate();
  const data = {
    id: Math.floor(Math.random() * 100),
    title: noteTitle.value,
    value: noteValue.value,
    date: formatedDate,
  };
  noteData.push(data);

  renderNotes();
  noteTitle.value = "";
  noteValue.value = "";
};
console.log(noteData);
const renderNotes = () => {
  noteContainer.textContent = "";

  noteData.forEach(({ title, date }) => {
    const noteDiv = document.createElement("div");
    const titleElement = document.createElement("p");
    const dateElement = document.createElement("p");

    noteDiv.className = "note-con";
    titleElement.className = "note-title-container";
    dateElement.className = "note-date-container";

    titleElement.textContent = title;
    dateElement.textContent = date;

    noteDiv.appendChild(titleElement);
    noteDiv.appendChild(dateElement);
    noteContainer.appendChild(noteDiv);
  });
  toogleModal();
};

const toogleModal = () => {
  modal.style.display = modal.style.display === "block" ? "none" : "block";
};

saveNote.addEventListener("click", addNewNote);
addNewNoteButton.forEach((button) => {
  button.addEventListener("click", toogleModal);
});
backArrowModal.addEventListener("click", toogleModal);
