const weekday = ['mon','tue','wed','thu','fri','sat','sun']
let openingHours = {
    [weekday[0]]: {
        open: 12,
        close: 22
    },
    [weekday[3]]: {
        open: 11,
        close: 23
    },
    [weekday[5]]: {
        open: 0,
        close: 24
    },
} 

let restaurant = {
    name : 'Classico Italiano',
    location: 'Nam tu Liem ',
    categories : ['Italan', 'Pizzaria','Oragenic','Vegetarian'],
    starterMenu : ['Forcaccia', 'Bruschetta','Gralic bread','Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours,
    order (starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    } ,
    orderDelivery({time=1,adress='no adress',mainIndex= 0,starterIndex=1}){
        console.log(`Order received! ${this.starterMenu[starterIndex]}
        and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}`)
    },

    orderPizza(mainIngredient, ...ortherIngredient){
        console.log(mainIngredient)
        console.log(ortherIngredient)
    }

};
/// obj name
for(const day of Object.keys(openingHours)){
    console.log(day)
}

//obj values
let value = Object.values(openingHours)
console.log(value)
//entries() method with obj
let entries = Object.entries(openingHours)
console.log(entries)