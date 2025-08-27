import "./styles.css"
import linkImage from './assets/link.png';


function createHomeContent() {
    // Get the existing content container
    const content = document.querySelector("#content");

    // Image
    const img = document.createElement("img");
    img.src = linkImage;
    img.alt = "link";

    // Description wrapper
    const description = document.createElement("div");
    description.className = "description";

    // Heading
    const heading = document.createElement("h2");
    heading.textContent = "Welcome to Triforce Tavern";

    // Info text
    const info = document.createElement("div");
    info.id = "info";
    info.textContent = `Welcome to Triforce Tavern, a dining hall for heroes, wanderers, and royalty alike.
        Inspired by the world of The Legend of Zelda, our menu brings together hearty meals from across Hyrule — Goron-sized roasts, fresh Zora-inspired seafood, and sweet Lon Lon Ranch desserts.
        Whether you’re gathering your party before a great quest or simply looking to restore your hearts after a long day, Triforce Tavern is the place where courage, wisdom, and power come together in every bite.`;

    // Build structure
    description.appendChild(heading);
    description.appendChild(info);

    // Append everything into #content
    content.appendChild(img);
    content.appendChild(description);
}

createHomeContent()


console.log('it works!')