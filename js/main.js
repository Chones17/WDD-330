const links = [
    {
      label: "Week 01",
      url: "week-01/index.html"
    }, 
    {
      label: "Week 02",
      url: "week-02/index.html"
    }
  ]

  function loadIndex() {
      const ol = document.querySelector("#linkslist");

      links.forEach( link => {
          const li = document.createElement("li");
          const href = document.createElement("a");
          href.setAttribute("href", link.url);
          href.innerText = link.label;

          li.appendChild(href);
          ol.appendChild(li);
      })
  }