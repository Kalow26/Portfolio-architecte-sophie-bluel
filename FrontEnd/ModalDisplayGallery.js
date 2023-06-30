import { closeModal } from "./closeModal.js";
import { displayAddPhotosModal } from "./modalAddProject.js";
import { works } from "./app.js";
import { deleteProject } from "./deleteProject.js";



const modalGallery = `<div class="modal__content">
                        <i class="fa-solid fa-xmark"></i>
                        <div class="modal__content__container">
                          <h2>Galerie Photo</h2>
                          <div class="pictures__container">
                          </div>
                          <div class="underline"></div>
                          <button class="btn--addphoto">Ajouter une photo</button>
                          <a href="#" class="btn--deletegallery">Supprimer la galerie</a>
                        </div>
                        </div>`;







export const displayGalleryModal = (modal, savebar) => {
    modal.innerHTML = modalGallery;
    const picturesContainer = document.querySelector(".pictures__container");
    picturesContainer.innerHTML = "";
    works.forEach((work) => {
      const figure = document.createElement("figure");
      figure.innerHTML = `
                            <img src="${work.imageUrl}" alt="${work.title} class="gallery__image__caption" name="${work.id}">
                            <div class="pictures__container__icons">
                              <i class="fa-solid fa-arrows-up-down-left-right"></i>	
                              <i class="fa-solid fa-trash-can" name="${work.id}"></i>
                            </div>
                            <figcaption>éditer</figcaption>
                            `;
      picturesContainer.appendChild(figure);
    });
    closeModal(savebar, modal);
    const deleteicon = document.querySelectorAll(".fa-trash-can");
    const imageCaption = document.querySelectorAll(".gallery__image__caption");
    const selectedItem = [];
    deleteicon.forEach ((icon) => {
      
      icon.addEventListener ("click", (e) => {
        e.preventDefault();
        const name = icon.parentNode.previousElementSibling.getAttribute("name");

        // Check if the work.id is already in the selectedItem array
    const index = selectedItem.indexOf(name);
    if (index === -1) {
      // If not present, add it to the array
      selectedItem.push(name);
      console.log(selectedItem)
    } else {
      // If already present, remove it from the array
      selectedItem.splice(index, 1);
      console.log(selectedItem)
    }

    // Apply opacity effect to the corresponding image
    const image = document.querySelector(`img[name="${name}"]`);
    if (image) {
      image.classList.toggle("fade-out", index === -1);
    }
      })

    
    })

    const pusblishChangeButton = document.querySelector(".btn--savechange");
    pusblishChangeButton.addEventListener("click", () => {
      if (selectedItem.length >=1 ) {
        selectedItem.forEach ((elem) => {
          deleteProject(elem);
        })
      }
    })


    document
  .querySelector(".btn--addphoto")
  .addEventListener("click", () => displayAddPhotosModal(savebar, modal));
  };