const addNewNote = document.querySelectorAll(".add-note-button");
const modal = document.querySelector(".modal");
const backArrowModal = document.querySelector(".arrow-back-modal");
const saveNote = document.querySelector(".save-note");

const toogleModal = () => {
  modal.style.display = modal.style.display === "block" ? "none" : "block";
};

addNewNote.forEach((button) => {
  button.addEventListener("click", toogleModal);
});
backArrowModal.addEventListener("click", toogleModal);
