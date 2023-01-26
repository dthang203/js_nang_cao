//toán tử kết hợp nullish
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

retaurant.numGuests = null;
const guests = retaurant.numGuests || 10;
console.log(guests);

//giá trị của ?? là null và undefined (ko bao gồm số 0 hoặc chuỗi trống)
const guestCorrect = retaurant.numGuests ?? 10;
console.log(guestCorrect);

/* Toán tử Nullish Coalescing là toán tử hai ngôi a ?? b, với định nghĩa là:
+ Nếu a khác null và undefined thì kết quả của a ?? b là a.
+ Ngược lạị, nếu a bằng null hoặc undefined thì kết quả của a ?? b là b. */