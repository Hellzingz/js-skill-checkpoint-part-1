// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];

inventory[0].quantity = 200;
inventory.push({name: "Orange", price: 20, quantity: 300});

totalPrice = 0;
for(let item of inventory){
  totalPrice += (item.price*item.quantity);
}
console.log(totalPrice);
