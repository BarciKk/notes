import { errorMessage, formatDate, toogleCreatorModal } from "./helpers.js";
import {
  noteTitle,
  noteValue,
  noteContainer,
  note,
  saveNote,
  addNewNoteButton,
  backArrowModal,
  modal,
  noteCreatorModal,
  displayCreatedNoteModal,
  textAreaDescription,
  titleInput,
} from "./domElements.js";

let noteData = [];
let holdTimer;

const addNewNote = () => {
  if (noteTitle.value === "") {
    noteValue.textContent = errorMessage;
    return;
  }
  const formatedDate = formatDate();
  const data = {
    id: Math.floor(Math.random() * 100),
    title: noteTitle.value,
    value: noteValue.value,
    date: formatedDate,
  };
  noteData.push(data);
  noteValue.value = "";

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

    noteDiv.dataset.noteId = id;
    titleElement.textContent = title;
    dateElement.textContent = date;

    noteDiv.appendChild(titleElement);
    noteDiv.appendChild(dateElement);
    noteDiv.addEventListener("mousedown", () => {
      holdTimer = setTimeout(() => {
        deleteNote(id);
      }, 300);
    });

    noteDiv.addEventListener("mouseup", () => {
      clearTimeout(holdTimer);
    });

    noteContainer.appendChild(noteDiv);
  });
  toogleCreatorModal();
};

const deleteNote = (id) => {
  const index = noteData.findIndex((entity) => entity.id === id);

  if (index === -1) return;

  noteData.splice(index, 1);
  note.children[index].remove();

  saveToLocalStorage();
};
const toogleDisplayCreatedNoteModal = (id) => {
  modal.style.display = modal.style.display === "block" ? "none" : "block";

  if (modal.style.display === "block") {
    noteCreatorModal.style.display = "none";
    displayCreatedNoteModal.style.display = "block";

    const clickedNote = noteData.find((note) => note.id === id);
    if (clickedNote) {
      const { title, value } = clickedNote;
      titleInput.value = title;
      textAreaDescription.value = value;
    }
  } else {
    displayCreatedNoteModal.style.display = "none";
  }
};
noteContainer.addEventListener("click", (event) => {
  const clickedNote = event.target.closest(".note-container");
  if (clickedNote) {
    const id = parseInt(clickedNote.dataset.noteId, 10);
    toogleDisplayCreatedNoteModal(id);
  }
});

const saveToLocalStorage = () => {
  localStorage.setItem("data", JSON.stringify(noteData));
};
const loadFromLocalStorage = () => {
  const storedLocalData = localStorage.getItem("data");
  if (storedLocalData) {
    noteData = JSON.parse(storedLocalData);
    if (noteData.length > 0) {
      renderNotes();
      toogleCreatorModal();
    } else {
      localStorage.removeItem("data");
    }
  }
};

saveNote.addEventListener("click", addNewNote);
addNewNoteButton.forEach((button) => {
  button.addEventListener("click", toogleCreatorModal);
});

backArrowModal.forEach((backArrow) => {
  backArrow.addEventListener("click", () => {
    modal.style.display = "none";
  });
});
window.addEventListener("load", loadFromLocalStorage);