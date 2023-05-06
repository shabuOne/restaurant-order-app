import menuArray from "./data.js";
/* import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
console.log(uuidv4()) */

document.addEventListener('click', function(e){
    //add button
    if(e.target.dataset.add){
        handleAddBtnClick(e.target.dataset.add)
    }
})

function handleAddBtnClick(uuid) {
    //console.log(`add button of ${uuid} clicked`)
    //get index of fooditem
}

function getFoodMenuHtml() {
    let foodMenuHtml = ``
    menuArray.forEach(function(foodItem){
        foodMenuHtml += `
        <div class="food-item border-bottom">
            <img class="food-item-image" src="${foodItem.image}">
            <div class="food-item-details">
                <h2 class="title-main title-food">${foodItem.name}</h2>
                <p class="food-subtitle">${foodItem.ingredients}</p>
                <p class="price">${foodItem.price}</p>
            </div>
            <div class="add-remove-item">
                <button id="btn-remove-${foodItem.uuid}" class="btn-round hidden" data-remove="${foodItem.uuid}">-</button>
                <p id="count-${foodItem.uuid}" class="item-count"></p>
                <button id="btn-add-${foodItem.uuid}" class="btn-round" data-add="${foodItem.uuid}">+</button>
            </div>
        </div>
        `
    })
    return foodMenuHtml;
}

function render(){
    document.getElementById('food-items').innerHTML = getFoodMenuHtml();
}

render()