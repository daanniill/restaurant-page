import seafoodStewImg from "./assets/food/seafoodstew.png";
import mushroomsImg from "./assets/food/mushrooms.png";
import pizzaImg from "./assets/food/hyliantomatopizza.png";
import gourmetMeatImg from "./assets/food/gourmetmeatandseafoodfry.png";
import friedeggImg from "./assets/food/friedeggandrice.png";
import fruitcakeImg from "./assets/food/fruitcake.png";
import dubiousImg from "./assets/food/dubiousfood.png";

import rupeeImgsrc from "./assets/rupee.png";

let menu = []

class Dish {
    constructor(name, img, description, price){
        this._name = name;
        this._img = img;
        this._description = description;
        this._price = price;
    }
    
    get name() {
        return this._name;
    }
    
    get img() {
        return this._img;
    }

    get description() {
        return this._description;
    }

    get price() {
        return this._price;
    }
}

export const createMenuItem = () => {
    const title = document.createElement("div")
    title.setAttribute("id", "menu_title")
    const title_text = document.createElement("h1")
    title_text.textContent = "MENU"

    document.querySelector("#content").appendChild(title).appendChild(title_text)

    const carousel = document.createElement("div");
    carousel.setAttribute("id", "carousel_container")

    const menu_container = document.createElement("div");
    menu_container.setAttribute("id", "menu")

    document.querySelector("#content").appendChild(carousel).appendChild(menu_container)

    menu.forEach((food, index) => {
        // Card container
        const card = document.createElement("div");
        card.className = "card";
        card.style.animation = `fadeInTop 1s ease forwards`;
        let delay = index * 300 + 500; // 300ms stagger
        card.style.animationDelay = `${delay}ms`;

        // SVG curve text
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", "0 0 500 150");
        svg.classList.add("curve-text");

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("id", "curve");
        path.setAttribute("d", "M50,120 C150,10 350,10 450,120");
        path.setAttribute("fill", "transparent");

        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.classList.add("curve-label");
        text.setAttribute("text-anchor", "middle");

        const textPath = document.createElementNS("http://www.w3.org/2000/svg", "textPath");
        textPath.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#curve");
        textPath.setAttribute("startOffset", "50%");
        textPath.textContent = food.name;

        // Build SVG
        text.appendChild(textPath);
        svg.appendChild(path);
        svg.appendChild(text);

        // Food image
        const foodImg = document.createElement("img");
        foodImg.src = food.img;
        foodImg.alt = "dish";
        foodImg.className = "card-img";

        // Description
        const desc = document.createElement("p");
        desc.textContent = food.description;

        // Order section
        const orderSec = document.createElement("div");
        orderSec.className = "order_sec";

        const rupeeImg = document.createElement("img");
        rupeeImg.id = "rupee";
        rupeeImg.src = rupeeImgsrc;

        const price = document.createElement("div");
        price.id = "price";
        price.textContent = food.price;

        const orderBtn = document.createElement("button");
        orderBtn.id = "order";
        orderBtn.textContent = "Order";

        // Build order section
        orderSec.appendChild(rupeeImg);
        orderSec.appendChild(price);
        orderSec.appendChild(orderBtn);

        // Assemble card
        card.appendChild(svg);
        card.appendChild(foodImg);
        card.appendChild(desc);
        card.appendChild(orderSec);

        // Append to menu
        menu_container.appendChild(card);
    });
}

export const initCarousel = () => {
    const carousel = document.querySelector("#menu");
    const cards = Array.from(carousel.children);
    const cardWidth = 370; // width + gap
    const visibleCards = 3;
    const scrollAmount = cardWidth * visibleCards;

    for (let i = 0; i < visibleCards; i++) {
        carousel.appendChild(cards[i].cloneNode(true));
        carousel.insertBefore(cards[cards.length - 1 - i].cloneNode(true), carousel.firstChild);
    }

    carousel.scrollLeft = scrollAmount;

    carousel.addEventListener("scroll", () => {
        if (carousel.scrollLeft <= 0) {
            carousel.scrollLeft = carousel.scrollWidth - scrollAmount * 2;
        }
        else if (carousel.scrollLeft >= carousel.scrollWidth - scrollAmount) {
            carousel.scrollLeft = scrollAmount;
        }
    });
};

// pre-populating menu
const dish1 = new Dish(
    "Fragrant Seafood Stew",
    seafoodStewImg,
    "A tasty dish of seafood and stambulb cooked in oil. Its aroma will whet your appetite.",
    "15"
)
const dish2 = new Dish(
    "Salt-Grilled Mushrooms",
    mushroomsImg,
    "A basic mushroom dish made by lightly salting mushrooms and grilling them.",
    "10"
)
const dish3 = new Dish(
    "Fried Egg and Rice",
    friedeggImg,
    "The soft egg yolk pairs well with the rice in this simple dish.",
    "15"
)
const dish4 = new Dish(
    "Hylian Tomato Pizza",
    pizzaImg,
    "A pizza made with fresh Hylian tomato. Slices of melty Hateno cheese make it irresistible",
    "25"
)
const dish5 = new Dish(
    "Gourmet Meat and Seafood Fry",
    gourmetMeatImg,
    "A marriage of the choicest cuts of meat and seafood. As delicious as it is filling!",
    "50"
)
const dish6 = new Dish(
    "Fruitcake",
    fruitcakeImg,
    "Making ample use of fruits found all over Hyrule, this cake is a must for celebrations.",
    "15"
)
const dish7 = new Dish(
    "Dubious Food",
    dubiousImg,
    "It's too gross to even look at. A bizarre smell issues forth from this heap. Eating it won't hurt you though...probably.",
    "1"
)

menu.push(dish1);
menu.push(dish2);
menu.push(dish3);
menu.push(dish4);
menu.push(dish5);
menu.push(dish6);
menu.push(dish7);



