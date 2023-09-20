
//Loading other scripts to module
import {
  cart,addToCart
}from './cart.js'
import{
  products
}from './products.js'
let productsHTML='';
//Listing all objects in products.
//All details are expanded using HTML template.
products.forEach((product)=>{
    productsHTML+=`
        <div class="product-container col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
          ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars*10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count.toLocaleString('en-IN')}
            </div>
          </div>

          <div class="product-price">
            &#8377;${product.price.toLocaleString('en-IN')}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>


          <button class="add-to-cart-button button-primary js-add-to-cart"
          data-product-name="${product.name}">
            Add to Cart
          </button>
        </div>
    `;
});
// Writing all listed items onto webpage
console.log(productsHTML);
document.querySelector('.js-products-grid').innerHTML=productsHTML;
//Updating cart's items number in page
function updateCartQuantity(){
  let cartQuantity=0;
  cart.forEach((cartItem)=>{
    cartQuantity+=cartItem.quantity;
  });
  document.querySelector('.js-cart-quantity').innerHTML=cartQuantity
}
//FunctionCalls
document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click',()=>
  {
    const productName=button.dataset.productName;
    addToCart(productName);
    updateCartQuantity();
  });
  
});
$(document).ready(function(){
	$(".subscription").validate({
		rules:{
			phone:{
				required: true,
				minlength: 10,
				maxlength: 10,
				digits: true
			},
			name:{
				required: true,
				minlength: 2,
				maxlength: 16,
				lettersonly: true
				
				
			},
			mail:{
				required: true,
				minlength: 4,
				email: true
			}
		},
		messages:{
			phone:{
				required: "Enter a valid mobile number",
				digits: "Only numbers are allowed"
			},
			name:{
				required: "Enter a valid name",
				lettersonly: "Only alphabets are allowed"
			},
			mail:{
				required: "Enter a valid email id",
				email: "Enter a valid email id"
			}
		}
	});
});
