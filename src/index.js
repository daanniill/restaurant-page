import "./styles.css"
import "./about.css"
import "./home.css"
import linkImage from './assets/link.png';

function createHomeSection() {
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
    button.id = "order";
    button.textContent = "Order Now";

    // Location tagline
    const h4 = document.createElement("h4");
    h4.textContent = "Find us East of Tarrey Town Today";

    // Append everything to #content
    content.appendChild(titleContainer);
    content.appendChild(button);
    content.appendChild(h4);
}


function createAboutContent() {
    // Get the existing content container
    const content = document.querySelector("#content");

    const wrapper = document.createElement("div")
    wrapper.setAttribute("class", "main")


    // Image
    const img = document.createElement("img");
    img.src = linkImage;
    img.alt = "link";

    // Info text
    const info = document.createElement("div");
    info.id = "info";

    // Heading
    const heading = document.createElement("h2");
    heading.textContent = "Link";
    
    // description
    const description = document.createElement('p')
    description.id = "description"
    description.textContent = `Welcome to Triforce Tavern, a dining hall for heroes, wanderers, and royalty alike.
        Inspired by the world of The Legend of Zelda, our menu brings together hearty meals from across Hyrule — Goron-sized roasts, fresh Zora-inspired seafood, and sweet Lon Lon Ranch desserts.
        Whether you’re gathering your party before a great quest or simply looking to restore your hearts after a long day, Triforce Tavern is the place where courage, wisdom, and power come together in every bite.`;

    info.appendChild(heading)
    info.appendChild(description)

    // Append everything into #content
    wrapper.appendChild(img);
    wrapper.appendChild(info)
    content.appendChild(wrapper);
}

createHomeContent()


console.log('it works!')