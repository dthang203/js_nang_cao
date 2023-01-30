let restaurant = {
    name : 'Classico Italiano',
    location: 'Nam tu Liem ',
    categories : ['Italan', 'Pizzaria','Oragenic','Vegetarian'],
    starterMenu : ['Forcaccia', 'Bruschetta','Gralic bread','Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22
        },
        fri: {
            open: 11,
            close: 23
        },
        sat: {
            open: 0,
            close: 24
        },
    } ,
    order : function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    } ,

    orderDelivery: function({time=1,adress='no adress',mainIndex= 0,starterIndex=1}){
        console.log(`Order received! ${this.starterMenu[starterIndex]}
        and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}`)
    },
    orderPizza: function(mainIngredient, ...ortherIngredient){
        console.log(mainIngredient)
        console.log(ortherIngredient)
    }

};
const menu = [...restaurant.mainMenu,...restaurant.starterMenu];
for(let item of menu) {
    console.log(item) // each element
}
for(let item2 of menu.entries()) {
    console.log(item2) // [index, value]
}


for(let [index,item] of menu.entries()) {
    console.log(`${index +1}: ${item}`)
}