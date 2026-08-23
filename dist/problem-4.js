"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateOrderTotal = (items) => {
    const orderTotal = items.reduce((accu, item) => {
        const { price } = item;
        const total = accu + price;
        return total;
    }, 0);
    return orderTotal;
};
console.log(calculateOrderTotal([{ name: "Burger", price: 250 }, { name: "Fries", price: 90 }, { name: "Soda", price: 60 }]));
console.log(calculateOrderTotal([{ name: "Pizza", price: 500 }]));
console.log(calculateOrderTotal([]));
//# sourceMappingURL=problem-4.js.map