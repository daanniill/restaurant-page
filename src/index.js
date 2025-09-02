import "./styles.css"
import "./about.css"
import "./home.css"
import "./menu.css"
import homeBackground from "./assets/botw2.png"
import kakarikoBg from "./assets/kakarikorain.png";
import aboutBackground from './assets/totksunset.png';
import { createMenuItem, initCarousel} from "./menu";
import { createAboutContent } from "./about";

function createHomeContent() {
    // Get the parent container (change selector if needed)
    const content = document.querySelector("#content");

    // Title container
    const titleContainer = document.createElement("div");
    titleContainer.id = "title_container";

    // Main heading
    const h1 = document.createElement("h1");
    h1.textContent = "Welcome to the Triforce Tavern";

    // Subheading
    const h3 = document.createElement("h3");
    h3.textContent = "The Finest Establishment in Hyrule";

    // Append headings
    titleContainer.appendChild(h1);
    titleContainer.appendChild(h3);

    // Order button
    const button = document.createElement("button");
    button.id = "order_now";
    button.textContent = "Order Now";

    // Location tagline
    const h4 = document.createElement("h4");
    h4.textContent = "Find us East of Tarrey Town Today";

    // Append everything to #content
    content.appendChild(titleContainer);
    content.appendChild(button);
    content.appendChild(h4);
}

function menuControl() {
    const home = document.querySelector("#home_page");
    const menu = document.querySelector("#menu_page");
    const about = document.querySelector("#about_page");

    let curPage = "home"
    pageUpdate(curPage)

    // button listener for header
    home.addEventListener("click", () => {
        if (curPage !== "home")
        {
            curPage = "home";
            console.log("home")
            pageUpdate(curPage)
        }   
    });
    menu.addEventListener("click", () => {
        if (curPage !== "menu") 
        {
            curPage = "menu";
            console.log("menu")
            pageUpdate(curPage)
        }
    });
    about.addEventListener("click", () => {
        if (curPage !== "about")
        {
            curPage = "about";
            console.log("about")
            pageUpdate(curPage)
        }
    });

}

function pageUpdate(curPage) {
    document.querySelector("#content").innerHTML = ''
    // page initializer
    if (curPage === "home") {
        changeBackground(homeBackground)
        createHomeContent()

        const order_now = document.querySelector("#order_now");
        if (order_now) {
            order_now.addEventListener("click", () => {
                console.log("menu");
                pageUpdate("menu");
            });
        }
    }
    else if (curPage === "menu") {
        changeBackground(kakarikoBg)
        createMenuItem()
        initCarousel()
    }
    else {
        changeBackground(aboutBackground)
        createAboutContent()
    }
}

function changeBackground(newSrc) {
    const bg = document.querySelector(".background_img");

    // Fade out
    bg.style.opacity = 0;

    setTimeout(() => {
        // Change image once faded
        bg.src = newSrc;

        // Fade back in
        bg.style.opacity = 1;
    }, 500); // half transition time
}


menuControl()


console.log('it works!')