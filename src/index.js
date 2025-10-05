import "./styles.css";
import { loadInitialPage } from "./initial.js";
import { emptyPage } from "./empty.js";
import { loadMenuPage } from "./menu.js";

const homeButton = document.querySelector(".home-button");
homeButton.addEventListener("click", () => {
    emptyPage();
    loadInitialPage(); 
});

const menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", () => {
    emptyPage();
    loadMenuPage(); 
});

const aboutButton = document.querySelector(".about-button");
aboutButton.addEventListener("click", () => {
    emptyPage();
});

loadInitialPage(); 

