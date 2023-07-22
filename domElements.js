const addNewNoteButton = document.querySelectorAll(".add-note-button");
const modal = document.querySelector(".modal");
const backArrowModal = document.querySelectorAll(".arrow-back-modal");
const note = document.querySelector(".note");
const noteContainer = document.querySelector(".note");
const saveNote = document.querySelector(".save-note");
const noteTitle = document.querySelector(".title-note");
const noteContent = document.querySelector(".note-text-content");
const noteCreatorModal = document.querySelector(".note-creator");
const displayCreatedNoteModal = document.querySelector(".show-created-note");
const titleInput = document.getElementById("title-input");
const textAreaDescription = document.getElementById("note-description");

export {
  addNewNoteButton,
  modal,
  backArrowModal,
  note,
  noteContainer,
  saveNote,
  noteTitle,
  noteContent,
  noteCreatorModal,
  displayCreatedNoteModal,
  titleInput,
  textAreaDescription,
};
