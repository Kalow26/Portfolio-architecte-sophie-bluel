export const closeModalHandler = (savebar, modal) => {
  savebar.style.display = "none";
  modal.style.display = "none";
};

export const closeModal = (savebar, modal) => {
  // Close modal when close button is clicked
  document
    .querySelector(".fa-xmark")
    .addEventListener("click", () => closeModalHandler(savebar, modal));

  // Close modal when click occurs outside the modal
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("modal")) {
      closeModalHandler(savebar, modal);
    }
  });
};
