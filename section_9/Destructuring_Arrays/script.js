'use strict';

const retaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegatarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};

const arr = [2,3,4];

const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x,y,z] = arr;


console.log(x, y, z);
console.log(arr);
//lấy 2 phần tử đầu tiên
const [first, second] = retaurant.categories;
console.log(first, second);
//bỏ qua phần tử giữa
const [first2, , second2] = retaurant.categories;
console.log(first2, second2);
//đảo 2 phần tử
let [main, secondary] = retaurant.categories;
console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary);
//lấy phần tử ở 2 mục khác nhau
const [starter, mainCourse] = retaurant.order(2,0);
console.log(starter, mainCourse);
//cấu trúc huỷ lồng nhau
const nested = [2,4,[5,6]];
const[i, ,[j,k]] = nested;
console.log(i,j,k);
//
const[p=1,q=1,r=1] = [8,9];
console.log(p,q,r);