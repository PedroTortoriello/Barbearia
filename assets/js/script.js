'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = () => navbar.classList.toggle("active");

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = () => navbar.classList.remove("active");

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header & back top btn active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);



/**
 * filter function
 */

const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter]");

let lastClickedFilterBtn = filterBtns[0];

const filter = function () {
  lastClickedFilterBtn.classList.remove("active");
  this.classList.add("active");
  lastClickedFilterBtn = this;

  for (let i = 0; i < filterItems.length; i++) {
    if (this.dataset.filterBtn === filterItems[i].dataset.filter || this.dataset.filterBtn === "all") {
      filterItems[i].style.display = "block";
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].style.display = "none";
      filterItems[i].classList.remove("active");
    }
  }
};

// Aplicar filtro e abrir a aba "Cortes" por padrão quando a página é carregada
filterAndOpenCortes();

// Adicionar evento de clique a cada botão de filtro
filterBtns.forEach((btn) => {
  btn.addEventListener("click", filter);
});

// Função para aplicar o filtro e abrir a aba "Cortes" por padrão
function filterAndOpenCortes() {
  for (let i = 0; i < filterBtns.length; i++) {
    if (filterBtns[i].dataset.filterBtn === "shaving") {
      filterBtns[i].classList.add("active");
      lastClickedFilterBtn = filterBtns[i];
    } else {
      filterBtns[i].classList.remove("active");
    }
  }

  for (let i = 0; i < filterItems.length; i++) {
    if (filterItems[i].dataset.filter === "shaving" || filterItems[i].dataset.filter === "all") {
      filterItems[i].style.display = "block";
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].style.display = "none";
      filterItems[i].classList.remove("active");
    }
  }
}

window.addEventListener('resize', function() {
  // Recarregue o mapa ou ajuste suas propriedades conforme necessário
});