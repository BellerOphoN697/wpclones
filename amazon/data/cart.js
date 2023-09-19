export const cart=[
    

];

//Add to cart function.
//Contains steps to calculate items and pushing the number to cart icon in webpage
export function addToCart(productId){
    let matchingItem;
      cart.forEach((cartItem)=>{
        if(productId===cartItem.productId){
          matchingItem=cartItem;
  
        }
  
      });
      if(matchingItem){
        matchingItem.quantity+=1;
      }
      else{
        cart.push({
          productId: productId,
          quantity: 1
        });
  
      }
  }