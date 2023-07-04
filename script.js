const addNewNoteButton = document.querySelectorAll(".add-note-button");
const modal = document.querySelector(".modal");
const backArrowModal = document.querySelector(".arrow-back-modal");
const note = document.querySelector(".note");
const noteContainer = document.querySelector(".note");
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

  saveToLocalStorage();
  renderNotes();
  noteTitle.value = "";
  noteValue.value = "";
};
const renderNotes = () => {
  noteContainer.textContent = "";

  noteData.forEach(({ title, date, id }) => {
    const noteDiv = document.createElement("div");
    const titleElement = document.createElement("p");
    const dateElement = document.createElement("p");

    noteDiv.className = "note-container";
    titleElement.className = "note-title-container";
    dateElement.className = "note-date-container";

    titleElement.textContent = title;
    dateElement.textContent = date;

    noteDiv.appendChild(titleElement);
    noteDiv.appendChild(dateElement);
    noteDiv.addEventListener("dblclick", () => deleteNote(id));

    noteContainer.appendChild(noteDiv);
  });
  toogleModal();
};

const saveToLocalStorage = () => {
  localStorage.setItem("data", JSON.stringify(noteData));
};
const loadFromLocalStorage = () => {
  const storedLocalData = localStorage.getItem("data");
  if (storedLocalData) {
    noteData = JSON.parse(storedLocalData);
    renderNotes();
    toogleModal();
  }
};

const deleteNote = (id) => {
  const index = noteData.findIndex((entity) => entity.id === id);

  if (index === -1) return;

  noteData.splice(index, 1);
  note.children[index].remove();

  saveToLocalStorage();
};
const toogleModal = () => {
  modal.style.display = modal.style.display === "block" ? "none" : "block";
};

saveNote.addEventListener("click", addNewNote);
addNewNoteButton.forEach((button) => {
  button.addEventListener("click", toogleModal);
});
backArrowModal.addEventListener("click", toogleModal);
window.addEventListener("load", loadFromLocalStorage);

//TODO:Figre out how to display image and text after deleting all the notes
