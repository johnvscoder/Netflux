const fotos = [
    "/images/galeria/cazafantasmas-mas-alla-trailer-2536614874.jpg",
    "/images/galeria/morbius.jpg",
    "/images/galeria/RAYA-Y-EL-ULTIMO-DRAGON-poster-ENG-387884113.jpg",
    "/images/galeria/sin-tiempo-para-morir-daniel-craig-1575383428.jpg",
    "/images/galeria/the-kings-man-la-primera-mision-l_cover-2288329537.jpg"
];


const colorBoton = "#fff4";
const colorBotonEnfocado = "#fffa";

const galeria = document.getElementById("galeria");
const galeriaImagen = galeria.firstElementChild;
const galeriaBotones = galeria.lastElementChild;

const documentFragment = document.createDocumentFragment();
for(foto in fotos) {
    const botonFoto = document.createElement("LI");
    botonFoto.setAttribute("id", `boton${parseInt(foto)+1}`);
    botonFoto.addEventListener("click", () => {
        let indice = parseInt(botonFoto.getAttribute("id").substring(5));
        galeriaImagen.setAttribute("src", fotos[indice - 1]);
        botonFoto.style.backgroundColor = colorBotonEnfocado;

        const botonEnfocadoAnterior = document.getElementById(idBotonEnfocado);
        botonEnfocadoAnterior.style.backgroundColor = colorBoton;
        idBotonEnfocado = botonFoto.getAttribute("id");
    });
    documentFragment.appendChild(botonFoto);
}
galeriaBotones.appendChild(documentFragment);

galeriaImagen.setAttribute("src", fotos[0]);
const botonSeleccionado = document.getElementById("boton1");
botonSeleccionado.style.backgroundColor = "#ffffffd8";
let idBotonEnfocado = "boton1";