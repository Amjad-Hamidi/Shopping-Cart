/* Made by : Amjad Hamidi */

/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = Array();


function getProductByIdFromList(productId, productList) {
  return productList.find((product) => product.productId === productId);
}


/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
const p1 = {
  name: "Carton of Cherries",
  price: 7,
  quantity: 0,
  productId: 1,
  image: "./images/cherry.jpg"
};

const p2 = {
  name: "Carton of Strawberries",
  price: 22,
  quantity: 0,
  productId: 2,
  image: "./images/strawberry.jpg"
};

const p3 = {
  name: "Bag of Oranges",
  price: 30,
  quantity: 0,
  productId: 3,
  image: "./images/orange.jpg"
};
products.push(p1, p2, p3);

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
const cart= [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

function addProductToCart(productId) {

  let cartItem = getProductByIdFromList(productId, cart) //check if the productItem is in the cart or not
  let productItem  = getProductByIdFromList(productId, products) //check if the productItem is in the products array or not
    
    if(productId ===  productItem.productId && cartItem === productItem){ //if it's => add one to the quantity of the cart
      cartItem.quantity++;
    }
    else if(productId ===  productItem.productId){ // else if to check => product we search matching with the productItem that is exist in the products array but unfortunately not in the cart
      productItem.quantity ++;                     // add one to the quantity of the productItem in the products array
      cart.push(productItem);                      // add it to the cart
    }

  /* or :
  const product = products.find(p => p.productId === productId);
  const cartItem = cart.find(item => item.productId === productId);
  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  */

  /* or :
  let product = products.find(product => product.productId === productId);
  if (product) {
    let cartProduct = cart.find(item => item.productId === productId);
    if (cartProduct) {
      cartProduct.quantity++;
    } else {
      cart.push(product);
      let cartProduct = cart.find(item => item.productId === productId);
      cartProduct.quantity++;
    }
  } 
  */
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId) {

  let cartItem = getProductByIdFromList(productId, cart);
  cartItem.quantity ++;

  /* or :
  const cartItem = cart.find(item => item.productId === productId);
  if (cartItem) {
    cartItem.quantity += 1;
  }
  */
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId) {
    const cartIndex = cart.findIndex(item => item.productId === productId);
    if(cartIndex!=-1){
    let cartItem = getProductByIdFromList(productId, cart);
    if(cartItem.quantity === 1){
      removeProductFromCart(productId);
    } else {
     cartItem.quantity --;
   }
  }
  /* or :
  const cartItem = cart.find(item => item.productId === productId);
  if (cartItem) {
    cartItem.quantity -= 1;
    if (cartItem.quantity === 0) {
      removeProductFromCart(productId);
    }
  }
  */
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId) {
  let cartItem = getProductByIdFromList(productId, cart);
  cartItem.quantity =0;
  cart.splice(cart.indexOf(cartItem), 1);
  /* or :
  const index = cart.findIndex(item => item.productId === productId);
  if (index !== -1) {
    cart.splice(index, 1);
  }
  */
}



/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/

function cartTotal() {
  let totalStock = 0;
  
  cart.forEach(item => {
    totalStock += item.price * item.quantity;
  });
  
  return totalStock;


  /* or :
  let totalStock = 0;
  for( let i = 0; i < cart.length ; i++){
    totalStock = totalStock + cart[i].price * cart[i].quantity;
  }
  return totalStock;
  */

  /* or :
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  */
}


/* Create a function called emptyCart that empties the products from the cart */

function emptyCart() {
  for( let i = 0; i < cart.length ; i++){
    cart.pop();
  }

  /* or :
  cart.splice(0, array.length);
   */
  /* or :
  cart.length = 0; // Clears the cart array
  */
}



/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/

let totalPaid = 0;

function pay(amount) {
  totalPaid += amount;
  let cashReturned = totalPaid - cartTotal();
  if (cashReturned >= 0) {
     totalPaid = 0;
  }
  return cashReturned;

  /* or :
  totalPaid += amount;
  const total = cartTotal();
  return totalPaid - total;
  */
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay, 
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}