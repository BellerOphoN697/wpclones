const products=[
    {
        image: 'images/products/vivo.jpg',
        name: 'Vivo Y100 5G (Metal Black, 8GB RAM, 128GB Storage)',
        rating:{
            stars: 4.0,
            count: 286

        },
        price: 21999
    },
    {
        image: 'images/products/oneplus.jpg',
        name: 'OnePlus 11 5G (Eternal Green, 8GB RAM, 128GB Storage)',
        rating:{
            stars: 4.5,
            count: 3901

        },
        price: 56999
    },
    {
        image: 'images/products/softspun.jpg',
        name: 'SOFTSPUN Microfiber Cloth - 5pcs - 40x40cms - 340GSM Multi-Color',
        rating:{
            stars: 4.5,
            count: 27763

        },
        price: 319
    }
];

let productsHTML='';

products.forEach((product)=>{
    productsHTML+=`
        <div class="product-container">
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
              ${product.rating.count}
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

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>
    `;
});

console.log(productsHTML);
document.querySelector('.js-products-grid').innerHTML=productsHTML;