const addNewNoteButton = document.querySelectorAll(".add-note-button");
const modal = document.querySelector(".modal");
const backArrowModal = document.querySelector(".arrow-back-modal");
const saveNote = document.querySelector(".save-note");
const noteTitle = document.querySelector(".title-note");
const noteValue = document.querySelector(".note-text-holder");

let noteData = [];

const addNewNote = () => {
  const formatedDate = formatDate();

  const data = {
    id: Math.floor(Math.random() * 100),
    title: noteTitle.value,
    value: noteValue.value,
    date: formatedDate,
  };
  noteData.push(data);
};

const toogleModal = () => {
  modal.style.display = modal.style.display === "block" ? "none" : "block";
};

saveNote.addEventListener("click", addNewNote);
addNewNoteButton.forEach((button) => {
  button.addEventListener("click", toogleModal);
});
backArrowModal.addEventListener("click", toogleModal);
