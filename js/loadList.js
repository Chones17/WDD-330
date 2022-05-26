export default function loadList(ident, list) {
    const ul = document.querySelector(ident);

    list.forEach( item => {
        const li = document.createElement("li");
        li.innerText = item.item;

        ul.appendChild(li);
    })
}