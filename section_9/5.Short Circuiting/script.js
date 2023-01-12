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

//TOÁN TỬ OR ||
/*có thể sử dụng bất cứ kiểu dữ liệu nào, 
nếu giá trị đầu tiên là giá trị thực thì ngay lập tức sẽ trả về giá trị đầu tiên*/
console.log(3 || 'Lonas');      //trả về 3
console.log('' || 'Hanna');     //trả về Hanna
console.log(true || 0);         //trả về true
console.log(undefined || null); //trả về null
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

//ví dụ thực tế
retaurant.numGuests = 79;
const guests1 = retaurant.numGuests ? retaurant.numGuests : 10; //nếu ko có giá trị của retaurant.numGuests thì sẽ trả về 10
console.log(guests1);

const guests2 = retaurant.numGuests || 10;
console.log(guests2);

console.log('------------END OR------------');

//TOÁN TỬ AND &&
//hoạt động ngược lại với toán tử OR
//toán tử AND chỉ đúng khi tất cả các toán hạng đều đúng
//nếu kết quả đầu tiên sai thì toàn bộ kết quả của phép toán đều sai
console.log(3 && 'Lonas');      //trả về 0
console.log(7 && 'Hanna');     //trả về Hanna
console.log('Hello' && 23 && null && 'abc'); //trả về null

//kiểm tra xem giá trị có thực sự tồn tại hay không
if (retaurant.orderPizza) {
    retaurant.orderPizza('mushrooms', 'spinach')
}
retaurant.orderPizza && retaurant.orderPizza('mushrooms', 'spinach')


