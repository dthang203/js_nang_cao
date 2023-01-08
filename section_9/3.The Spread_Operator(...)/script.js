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

    orderPasta: function(ing1, ing2, ing3) {
        console.log(`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    }
};

const arr = [7,8,9];
const badNewArr = [1,2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
//TOÁN TỬ SPREAD
//cách 2
const newArr = [1,2, ...arr];
console.log(newArr);
//in ra các phần tử riêng lẻ của mảng
console.log(...newArr);
//xây dựng 1 mảng mới
const newMenu = [...retaurant.mainMenu, 'Gnocci'];
console.log(newMenu)
//copy array
const mainMenuCopy = [...retaurant.mainMenu];
//nối 2 mảng
const menu = [...retaurant.starterMenu, ...retaurant.mainMenu]
console.log(menu);
//tạo mảng chứa các phần tử riêng lẻ
const str = 'hahahehe'
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);

//ví dự thực tế
const ingredients = [prompt("Let's make paste! Ingredient 1?"), prompt("Ingredient 2?"), prompt("Ingredient 3?")];
console.log(ingredients);
// retaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2]);
retaurant.orderPasta(...ingredients);

//objects
const newRestaurant = {founderIn: 1998, ...retaurant, founder: 'Guiseppe'}
console.log(newRestaurant)
//thay đổi đối tượng
const retaurantCopy ={...retaurant};
retaurantCopy.name= 'Ristorante Roma';
console.log(retaurantCopy.name);
console.log(retaurant.name);