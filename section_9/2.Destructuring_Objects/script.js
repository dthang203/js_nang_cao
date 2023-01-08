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

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function(ojb) {
        console.log(ojb);
    }
};

retaurant.orderDelivery({
    time: '22:23',
    address: 'Nam Tu Liem, Ha Noi',
    mainIndex: 2,
    starterIndex: 2,
});

const{name, openingHours, categories} = retaurant;
console.log(name, openingHours, categories);
//đặt tên biến mới
const{name: restaurantName, openingHours: hours, categories: tags} = retaurant;
console.log(restaurantName, hours, tags);
//Đặt giá trị mặc định cho biến
const {menu=[], starterMenu: starters = []} = retaurant;
console.log(menu, starters)
//thay đổi các biến
let a =111;
let b =999;
const obj = {a:23, b:7, c:14};
({a, b} =obj);
console.log(a,b);
//các đối tượng lồng nhau
const {tri: {open: o, close: c}} = openingHours;
console.log(o,c);
