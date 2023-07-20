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

let noteData = [];
let holdTimer;

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
const deleteNote = (id) => {
  const index = noteData.findIndex((entity) => entity.id === id);

  if (index === -1) return;

  noteData.splice(index, 1);
  note.children[index].remove();

  saveToLocalStorage();
};

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

const toogleDisplayCreatedNoteModal = (id) => {
  modal.style.display = modal.style.display === "block" ? "none" : "block";

  if (modal.style.display === "block") {
    noteCreatorModal.style.display = "none";
    displayCreatedNoteModal.style.display = "block";

    const titleInput = document.getElementById("title-input");
    const textAreaDescription = document.getElementById("note-description");

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

saveNote.addEventListener("click", addNewNote);

addNewNoteButton.forEach((button) => {
  button.addEventListener("click", toogleCreatorModal);
});

backArrowModal.forEach((e) => {
  e.addEventListener("click", () => {
    modal.style.display = "none";
  });
});

window.addEventListener("load", loadFromLocalStorage);
