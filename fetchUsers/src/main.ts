import "./style.css";

const List = document.querySelector(".products") as HTMLDivElement;

interface Item {
  id: Number;
  name: string;
  image: string;
}

function fetchApi() {
  fetch("https://dummyjson.com/recipes") // Assuming a more relevant endpoint since /recipes may not match the structure
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      displayItems(data.recipes); // Adjust based on the actual API response structure
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}

function displayItems(items: Item[]) {
  items.forEach((item) => {
    const itemDiv = document.createElement("div") as HTMLDivElement;
    itemDiv.className = "product-item";
    itemDiv.innerHTML = `
      <h3>${item.name}</h3>
      <p>id: ${item.id}</p>
      <img src="${item.image}"></img>
    `;
    List.appendChild(itemDiv);
  });
}

fetchApi();
