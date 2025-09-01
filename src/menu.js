import seafoodStewImg from "./assets/food/seafoodstew.png";
import rupeeImgsrc from "./assets/rupee.png";

export const createMenuItem = () => {
    const menu = document.querySelector("#menu");

    // Card container
    const card = document.createElement("div");
    card.className = "card";

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
    textPath.textContent = "Fragrant Seafood Stew";

    // Build SVG
    text.appendChild(textPath);
    svg.appendChild(path);
    svg.appendChild(text);

    // Food image
    const foodImg = document.createElement("img");
    foodImg.src = seafoodStewImg;
    foodImg.alt = "Seafood Stew";
    foodImg.className = "card-img";

    // Description
    const desc = document.createElement("p");
    desc.textContent = "A tasty dish of seafood and stambulb cooked in oil. Its aroma will whet your appetite.";

    // Order section
    const orderSec = document.createElement("div");
    orderSec.className = "order_sec";

    const rupeeImg = document.createElement("img");
    rupeeImg.id = "rupee";
    rupeeImg.src = rupeeImgsrc;

    const price = document.createElement("div");
    price.id = "price";
    price.textContent = "15";

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
    menu.appendChild(card);
}

