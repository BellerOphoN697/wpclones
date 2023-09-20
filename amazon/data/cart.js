export const cart=[
    /*
    {
        productId: 1,
        quantity: 2
    },
    {
        productId: 4,
        quantity:3
    }
    */
];

//Add to cart function.
//Contains steps to calculate items and pushing the number to cart icon in webpage
export function addToCart(productName){
    let matchingItem;
      cart.forEach((cartItem)=>{
        if(productName===cartItem.productName){
          matchingItem=cartItem;
  
        }
  
      });
      if(matchingItem){
        matchingItem.quantity+=1;
      }
      else{
        cart.push({
          productName: productName,
          quantity: 1
        });
  
      }
      console.log(matchingItem)
  }