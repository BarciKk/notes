const addNewNoteButton = document.querySelectorAll(".add-note-button");
const modal = document.querySelector(".modal");
const backArrowModal = document.querySelectorAll(".arrow-back-modal");
const note = document.querySelector(".note");
const noteContainer = document.querySelector(".note");
const saveNote = document.querySelector(".save-note");
const noteTitle = document.querySelector(".title-note");
const noteValue = document.querySelector(".note-text-holder");
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
  noteValue,
  noteCreatorModal,
  displayCreatedNoteModal,
  titleInput,
  textAreaDescription,
};
