type Item = {
    name: string,
    price: number
}

const calculateOrderTotal = (items: Item[]): number => {

    const orderTotal = items.reduce((accu, item): number => {
        const { price } = item;
        const total = accu + price;
        return total;

    }, 0);

    return orderTotal;
}

console.log(calculateOrderTotal([{ name: "Burger", price: 250 }, { name: "Fries", price: 90 }, { name: "Soda", price: 60 }]));
console.log(calculateOrderTotal([{ name: "Pizza", price: 500 }]));
console.log(calculateOrderTotal([]));
