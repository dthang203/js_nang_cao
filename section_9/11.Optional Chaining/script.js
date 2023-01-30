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


console.log(restaurant.openingHours.mon.open)
const days = ['mon','tue','wed','thu']
for(let day of days) {
    const open = restaurant.openingHours[day]?.open ?? 'closed'
    console.log(`On ${day} We open at ${open}`)

}
console.log(restaurant.order?.(0,1) ?? 'Methos doesnt nexist')

//Arrays
const users = [
    {
        name: 'John',
        email: 'john@mail.com'
    }
]
console.log(users?.[0])
console.log(users?.[0]?.name)