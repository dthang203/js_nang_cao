'use strict';

const retaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegatarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        tri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },

    orderPizza: function(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};

const arr = [1,2, ...[3, 4]];
console.log(arr);

const [a, b, ...others] = [1,2,3,4,5];
console.log(a,b, others);

const [pizza, , risotto, ...otherFood]=[...retaurant.mainMenu, ...retaurant.starterMenu];
console.log(pizza, risotto, otherFood);

//Objects
const {sat, ...weekdays} = retaurant.openingHours;
console.log(weekdays)

//1.Functions
const add = function(...numbers) {
    console.log(numbers);
};
add(2,3);
add(5,3,7,2);
add(8,2,5,3,2,1,4);

//2. tính tổng các số trong mảng
const add2 = function(...numbers) {
    let sum =0;
    for(let i=0; i<numbers.length; i++) sum +=numbers[i];
    console.log(sum);
};
add2(2,3);
add2(5,3,7,2);
add2(8,2,5,3,2,1,4);

const x = [23,5,7];
add(...x);

retaurant.orderPizza('mushrooms', 'onion', 'pliver', 'spinach');
retaurant.orderPizza('mushrooms')