import menuArray from "./data.js";
/* import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
console.log(uuidv4()) */

document.addEventListener('click', function(e){
    //add button
    if(e.target.dataset.add){
        handleAddBtnClick(e.target.dataset.add)
    } else if(e.target.dataset.remove){
        handleRemoveBtnClick(e.target.dataset.remove)
    }
})

function handleAddBtnClick(uuid) {
    menuArray.forEach(function(foodItem){
        if(foodItem.uuid === uuid) {
            foodItem.amount += 1
        }
    })
    render()
}

function handleRemoveBtnClick(uuid) {
    menuArray.forEach(function(foodItem){
        if(foodItem.uuid === uuid) {
            if (foodItem.amount > 0) {
                foodItem.amount -= 1
            }
        }
    })
    render()
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
                <p class="price">$${foodItem.price}</p>
            </div>
            <div class="add-remove-item">
                <button id="btn-remove-${foodItem.uuid}" class="btn-round hidden" data-remove="${foodItem.uuid}">-</button>
                <p id="count-${foodItem.uuid}" class="item-count hidden">${foodItem.amount}x</p>
                <button id="btn-add-${foodItem.uuid}" class="btn-round" data-add="${foodItem.uuid}">+</button>
            </div>
        </div>
        `
    })
    return foodMenuHtml;
}

function render(){
    document.getElementById('food-items').innerHTML = getFoodMenuHtml();
    //check fooditem.amount and hide or display amount + remove button
    //count basket
    let basket = 0;
    menuArray.forEach(function(foodItem){
        //remove hidden class for count and remove btn
        if(foodItem.amount > 0){
            document.getElementById(`btn-remove-${foodItem.uuid}`).classList.remove('hidden');
            document.getElementById(`count-${foodItem.uuid}`).classList.remove('hidden');
            document.getElementById('order-summary').classList.remove('hidden');
            basket += 1;
        } 
        //add hidden class for count and remove btn
        else if(foodItem.amount === 0) {
            document.getElementById(`btn-remove-${foodItem.uuid}`).classList.add('hidden');
            document.getElementById(`count-${foodItem.uuid}`).classList.add('hidden');
        }
        // hide and show order summary
        if(foodItem.amount === 0 && basket === 0) {
            document.getElementById('order-summary').classList.add('hidden');
        }
    });
}

render()