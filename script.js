const hexagons = [
  {
    title: "Inert Hexagon",
    description: "This is a non clickable hexagon",
    active: false,
    image: "",
  },
  {
    title: "",
    description: "",
    active: false,
    image: "",
  },
  {
    title: "Inert Image Hexagon",
    description: "This is a non-clickable hexagon with an image",
    active: false,
    image:
      "https://images.unsplash.com/photo-1760592150404-adacb88548e2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1035",
  },
  {
    title: "",
    description: "",
    active: false,
    image: "",
  },
  {
    title: "",
    description: "",
    active: false,
    image: "",
  },
  {
    title: "",
    description: "",
    active: false,
    image: "",
  },
  {
    title: "",
    description: "",
    active: false,
    image: "",
  },
  {
    title: "Active Hexagon",
    description: "This is an clickable hexagon",
    active: true,
    image: "",
  },
  {
    title: "",
    description: "",
    active: false,
    image: "",
  },
  {
    title: "Active Image Hexagon",
    description: "This is an clickable hexagon with an image",
    active: true,
    image:
      "https://images.unsplash.com/photo-1759332978018-a6efdacf4d11?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=990",
  },
  {
    title: "",
    description: "",
    active: false,
    image: "",
  },
  {
    title: "",
    description: "",
    active: false,
    image: "",
  },
  {
    title: "",
    description: "",
    active: false,
    image: "",
  },
  {
    title: "",
    description: "",
    active: false,
    image: "",
  },
  {
    title: "",
    description: "",
    active: false,
    image: "",
  },
  {
    title: "",
    description: "",
    active: false,
    image: "",
  },
  {
    title: "",
    description: "",
    active: false,
    image: "",
  },
  {
    title: "",
    description: "",
    active: false,
    image: "",
  },
];

const container = document.querySelector(".hexagons");

const createHexagon = (hexagons) => {
  hexagons.forEach((hex) => {
    const hexagonElement = document.createElement("li");
    hexagonElement.classList.add("hexagon");
    if (hex.active) {
      hexagonElement.addEventListener("click", () => {
        alert(`You clicked on ${hex.title}`);
      });
    }

    const hexagonRotate = document.createElement("div");
    hexagonRotate.classList.add("hexagon_rotate");

    const hexagonContent = document.createElement("div");
    hexagonContent.classList.add("hexagon_content");
    if (hex.active) {
      hexagonContent.classList.add("hexagon_content__active");
    } else {
      hexagonContent.classList.add("hexagon_content__inert");
    }

    const hexagonImage = document.createElement("div");
    hexagonImage.classList.add("hexagon_image");
    if (hex.image) {
      hexagonImage.style.backgroundImage = `url(${hex.image})`;
    }

    const hexagonTitle = document.createElement("h1");
    hexagonTitle.classList.add("hexagon_title");
    hexagonTitle.textContent = hex.title;

    const hexagonText = document.createElement("p");
    hexagonText.classList.add("hexagon_text");
    hexagonText.textContent = hex.description;

    hexagonContent.appendChild(hexagonImage);
    hexagonContent.appendChild(hexagonTitle);
    hexagonContent.appendChild(hexagonText);

    hexagonRotate.appendChild(hexagonContent);
    hexagonElement.appendChild(hexagonRotate);
    container.appendChild(hexagonElement);
  });
};

createHexagon(hexagons);
