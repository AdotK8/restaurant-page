import initialPageTop from "./initial-page-load";
import homePageLoad from "./home-page-load";
import menuPageLoad from "./menu-page-load";
import contactPageLoad from "./contact-page-load";
import "./styles.css";

initialPageTop();
homePageLoad();

const homeButton = document.querySelector(".home")
homeButton.addEventListener('click', () => {
    const tab = document.getElementById("tab");
   
    while (tab.firstChild){
        tab.removeChild(tab.firstChild)
        }
        homePageLoad();
    }
)

const menuButton = document.querySelector(".menu")
menuButton.addEventListener('click', () => {
    const tab = document.getElementById("tab");
   
    while (tab.firstChild){
        tab.removeChild(tab.firstChild)
        }
        menuPageLoad();
    }
)

const contactButton = document.querySelector(".contact")
contactButton.addEventListener('click', () => {
    const tab = document.getElementById("tab");
   
    while (tab.firstChild){
        tab.removeChild(tab.firstChild)
        }
        contactPageLoad();
    }
)




