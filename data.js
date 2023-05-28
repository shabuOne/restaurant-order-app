const menuArray = [
    {
        name: "Pizza",
        ingredients: ["pepperoni", "mushrom", "mozarella"],
        price: 14,
        image: "./images/pizza.png",
        uuid: 'bf8c128b-3622-4b11-8148-da3205df21cd',
        amount: 0
    },
    {
        name: "Hamburger",
        ingredients: ["beef", "cheese", "lettuce"],
        price: 12,
        image: "./images/burger.png",
        uuid: 'dd891883-84a0-4d52-89f6-dde6523920b8',
        amount: 0
    },
        {
        name: "Beer",
        ingredients: ["grain, hops, yeast, water"],
        price: 12,
        image: "./images/beer.png",
        uuid: '8ee8ebe7-6490-4616-afdc-176d5aa39725',
        amount: 0
    }
]

const paymentStatus = 
    {
        success: false
    };

export {paymentStatus, menuArray};