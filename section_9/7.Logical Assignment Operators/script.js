//toán tử gán logic
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

const rest1 = {
    name: 'Capri',
    numGuests: 0,
}
const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi',
};

//OR
rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;
//dùng toán tử gán để ngắn gọn hơn
rest1.numGuests ||= 10; //trả về 10
rest2.numGuests ||= 10; //trả về 0

//NULLISH
rest1.numGuests ??= 10; //trả về 0
rest2.numGuests ??= 10; //trả về 10

//AND
//thuộc tính ko tồn tại sẽ trả về ko xác định
rest1.owner = rest1.owner && '<Ẩn danh>'; //trả về undefiled
rest2.owner = rest2.owner && '<Ẩn danh>'; //trả về <Ẩn danh>
//cũng có thể viết gọn lại
rest1.owner &&= '<Ẩn danh>';
rest2.owner &&= '<Ẩn danh>';
console.log(rest1);
console.log(rest2);
