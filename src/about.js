import linkImage from './assets/link.png';


export const createAboutContent = () => {
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