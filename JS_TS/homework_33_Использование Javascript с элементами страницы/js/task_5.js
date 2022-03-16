const itemArr = document.getElementById("cart-items");

const itemId = document.getElementsByClassName("item");

const newItem = document.createElement("div")

newItem.innerHTML = "Canned Fish <span class= qty>x 4</span>";

itemId[1].remove();
itemArr.replaceChild(newItem, itemArr.children[3]);