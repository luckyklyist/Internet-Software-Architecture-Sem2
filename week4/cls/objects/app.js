const fruits = [
  {
    name: "mango",
    price: {
        minPrice:90,
        maxPrice:100
    },
  },
  {
    name: "apple",
    price: {
        minPrice:34,
        maxPrice:56
    },
  },
  {
    name: "orange",
    price: {
        minPrice:32,
        maxPrice:499
    },
  },
];

// nesting the list
fruits.forEach((fruit) => {
  console.log(`${fruit.name} and its price min price is ${fruit.price.minPrice} and its ${fruit.price.maxPrice}`);
});

const fruit2 = [...fruits, { name: "watermelon",  price: {
    minPrice:23,
    maxPrice:43
}, }];
console.log(fruit2)
