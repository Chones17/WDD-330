const links = [
    {
      label: "Week 01",
      url: "week-01/index.html"
    }, 
    {
      label: "Week 02",
      url: "week-02/index.html"
    },
    {
      label: "Week 03",
      url: "week-03/index.html"
    },
    {
      label: "Week 04",
      url: "week-04/index.html"
    },
    {
      label: "Week 05",
      url: "week-05/index.html"
    }
  ]

  function loadIndex() {
      const ol = document.querySelector("#linkslist");

      links.forEach( link => {
          const li = document.createElement("li");
          const img = document.createElement("img");
          const href = document.createElement("a");
          img.setAttribute("src", "images/file-icon.png");
          href.setAttribute("href", link.url);
          href.innerText = link.label;

          href.appendChild(img);
          li.appendChild(href);
          ol.appendChild(li);
      })
  }