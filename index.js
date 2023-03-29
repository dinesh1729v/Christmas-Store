import Card from "./card.js";
import Grid from "./grid.js";
// Create some cards
const cards = [
    new Card(
        "https://cdn.thewirecutter.com/wp-content/media/2022/11/decoratechristmastree-2048px-iStock-1281771707-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=980&dpr=1.5",
        "Chrismas Tree",
        "This is the Christmas Tree",
        10,
        100,
        90,
        "card-class-1"
    ),
    new Card(
        "https://media.istockphoto.com/id/1358361966/photo/jingle-bells.jpg?b=1&s=170667a&w=0&k=20&c=zNbdVxzOatolAqfAoAZ6_p3Af7vfNyi_WpxM8hX3q6M=",
        "Chrismas Bells",
        "These are the Christmas Bells",
        20,
        200,
        180,
        "card-class-2"
    ),
    new Card(
        "https://i0.wp.com/www.onceuponachef.com/images/2020/12/gingerbread-men.jpg?resize=768%2C512&ssl=1",
        "Christmas Cookies",
        "These are the Christmas Cookies",
        30,
        300,
        270,
        "card-class-3"
    ),
    new Card(
        "https://media.istockphoto.com/id/1069600900/photo/girls-opening-christmas-gifts.jpg?s=1024x1024&w=is&k=20&c=SlxbM82MgIv-NgMtjgw4qG7C6JXwWHQeviy-mvD34D0=",
        "Toys",
        "These are the Toys",
        30,
        300,
        270,
        "card-class-3"
    ),
];

// Create a grid with 2 columns and 3 rows
const grid = new Grid(3, 3, cards, "grid-class");

// Print the properties of the grid and cards to the browser
const outputElement = document.getElementById("grid-js");
outputElement.classList.add(`lg:grid-cols-${grid.numberOfColumns}`);
outputElement.classList.add(`lg:grid-rows-${grid.numberOfRows}`);

const tableElement = document.getElementById("discount-table")

// Print the card properties

for (let card of grid.cards) {
    outputElement.innerHTML += `<div class="${card.cardClassName} deal-card max-w-sm rounded overflow-hidden shadow-lg">
    <img class="w-full"
        src="${card.imageSource}"
        alt="${card.cardTitle}">
    <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">${card.cardTitle}</div>
        <p class="text-gray-700 text-base">
        ${card.cardDescription}
        </p>
    </div>
    <div class="px-6 pt-4 pb-2">
        <span
            class="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">-${card.cardDiscount}%</span>
    </div>
</div>`;
    tableElement.innerHTML += `
    <tr class="bg-gray-200">
				<td class="border border-gray-600 px-4 py-2">${card.cardTitle}</td>
				<td class="border border-gray-600 px-4 py-2">$${card.cardOriginal}</td>
				<td class="border border-gray-600 px-4 py-2">$${card.cardDiscounted}</td>
			  </tr>
    `;
}

const deal_cards = document.querySelectorAll(".deal-card");
deal_cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.05)';
    });
  
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
    });
  });


