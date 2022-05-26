export default function loadIndex(links) {
    const ul = document.querySelector("#linkslist");
    
    links.forEach( link => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        const href = document.createElement("a");
        img.setAttribute("src", "images/file-icon.png");
        href.setAttribute("href", link.url);
        href.innerText = link.label;
    
        href.appendChild(img);
        li.appendChild(href);
        ul.appendChild(li);
    })
}
