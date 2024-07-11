// Sélection des éléments DOM nécessaires
let nextDom = document.getElementById("next"); // Bouton "Suivant"
let prevDom = document.getElementById("prev"); // Bouton "Précédent"
let carouselDom = document.querySelector(".carousel"); // Conteneur du carousel
let SliderDom = carouselDom.querySelector(".carousel .list"); // Liste des éléments du slider
let thumbnailBorderDom = document.querySelector(".carousel .thumbnail"); // Conteneur des miniatures
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item"); // Éléments miniatures
let timeDom = document.querySelector(".carousel .time"); // Affichage du temps

// Déplacement de la première miniature au dernier emplacement
thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

// Configuration des intervalles de temps
let timeRunning = 3000; // Durée de l'animation du slider
let timeAutoNext = 7000; // Intervalle de temps pour le passage automatique

// Définition des actions pour les clics sur les boutons "Suivant" et "Précédent"
nextDom.onclick = function () {
  showSlider("next");
};

prevDom.onclick = function () {
  showSlider("prev");
};

// Initialisation des variables pour les timeouts
let runTimeOut;
let runNextAuto = setTimeout(() => {
  next.click();
}, timeAutoNext);

// Fonction pour afficher le slider
function showSlider(type) {
  // Sélection des éléments de slider et de miniature
  let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");
  let thumbnailItemsDom = document.querySelectorAll(
    ".carousel .thumbnail .item",
  );

  // Déplacement du slider en fonction du type de transition (suivant ou précédent)
  if (type === "next") {
    SliderDom.appendChild(SliderItemsDom[0]);
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    carouselDom.classList.add("next");
  } else {
    SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
    thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
    carouselDom.classList.add("prev");
  }

  // Suppression de la classe d'animation après un délai
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove("next");
    carouselDom.classList.remove("prev");
  }, timeRunning);

  // Déclenchement automatique du défilement après un délai
  clearTimeout(runNextAuto);
  runNextAuto = setTimeout(() => {
    next.click();
  }, timeAutoNext);
}
