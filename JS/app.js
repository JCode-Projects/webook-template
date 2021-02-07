const navegacion = document.querySelector(".navegacion");
const btnmenu = document.querySelector(".menu em");
btnmenu.addEventListener("click", accionMenu);

// Funciones
function accionMenu() {
    navegacion.classList.toggle("show");
}