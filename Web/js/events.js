/* Funcionamiento del menú hamburguesa */
const burguerIcon = document.querySelector(".navbar-burger");
const navbarMenu = document.querySelector(".navbar-menu");

burguerIcon.addEventListener("click", function () {
  navbarMenu.classList.toggle('is-active');
});


/* Tabs */
function openTab(evt, tabName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("content-tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" is-active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " is-active";
}


/* Modal */
document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
      $el.classList.add('is-active');
    }
  
    function closeModal($el) {
      $el.classList.remove('is-active');
    }
  
    function closeAllModals() {
      (document.querySelectorAll('.modal') || []).forEach(($modal) => {
        closeModal($modal);
      });
    }
  
    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
      const modal = $trigger.dataset.target;
      const $target = document.getElementById(modal);
  
      $trigger.addEventListener('click', () => {
        openModal($target);
      });
    });
  
    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
      const $target = $close.closest('.modal');
  
      $close.addEventListener('click', () => {
        closeModal($target);
      });
    });
  
    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
      const e = event || window.event;
  
      if (e.keyCode === 27) { // Escape key
        closeAllModals();
      }
    });
});


/* Botón subir ariba */
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


/* Creo los href d elos links al cargar la pagina. */
function createLink(id,moreUrl,path) {
  var baseUrl = 'https://eventos';

 /*  var myURL = document.getElementById("linkTemplate").getAttribute('moreUrl');
  var path = document.getElementById("linkTemplate").getAttribute('path'); */

  //Menu años
  /* var path2019 = document.getElementById("link2019").getAttribute('path');
  var path2021 = document.getElementById("link2021").getAttribute('path');
  var path2022 = document.getElementById("link2022").getAttribute('path'); */

  //Cambio dominio según el entorno main o dev 
  var miDom = window.location.href;
  var result = miDom.indexOf("dev");
  var newURL = baseUrl + moreUrl + '.i3a.es' + path;
  if (result != -1 ){
    newURL = baseUrl + moreUrl + '-dev.i3a.es' + path;
  }
alert(newURL)
  
//Cambio valor del href con la URL generada
  document.getElementById(id).setAttribute("href", newURL); 

}