var shoppingList = [];
var total = 0;
var itemOne = {
  name: 'Apples',
  price: 3.99 };
var itemTwo = {
  name: 'Bread',
  price: 1.49 };
var itemThree = {
  name: 'Chips',
  price: 2.89};

  shoppingList.push(itemOne, itemTwo, itemThree);

  shoppingList.forEach(function(item) {
    total += item.price;
    console.log(item.name + ' ' + item.price);
  });

  console.log(`The total is $${total.toFixed(2)}`);
