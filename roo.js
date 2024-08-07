let users = [];
let loggedInUser=null;
let products=[
    {id:1,name:"Product 1",price:100},
    {id:2,name:"Product 2",price:150},
    {id:3,name:"Product 3",price:200},
];
let cart=[];
document.getElementById('signup-form').addEventListener('submit',function(e){
    e.preventDefault();
    const email=document.getElementById('signup-email').value;
    const password=document.getElementById('signup-password').value;

    if(users.find(user => user.email === email)){
        document.getElementById('signup-message').innerText="You are already registered.";
        return;
    }
    users.push({email,password});

    document.getElementById('signup-message').innerText="Sign up successful! Logging you in...";
    loggedInUser={email};
    showProductList();
});

document.getElementById('login-form').addEventListener('submit',function(e){
    e.preventDefault();
    const email=document.getElementById('login-email').value;
    const password=document.getElementById('login-password').value;
    const user=users.find(user => user.email === email && user.password === password);
    if(user){
        loggedInUser=user;
        document.getElementById('login-message').innerText="Login successful!";
        showProductList();
        
    }else{
        document.getElementById('login-message').innerText="Invalid credentials.";
    }
});

function showProductList(){
    document.getElementById('registration').style.display='none';
    document.getElementById('login').style.display='none';
    document.getElementById('product-list').style.display='block';
    displayProducts();
}
function displayProducts(){
    const productsDiv=document.getElementById('products');
    productsDiv.innerHTML=
    products.forEach(product=>{
        productsDiv.innerHTML += `<div>
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>`;
    });
} 
function addToCart(productId){
    const product = products.find(p => p.id === productId);
    cart.push(product);
    alert($(product.name), added ,to ,cart);

}
document.getElementById('view-cart').addEventListener('click',function(){
    showCart();
});
function showCart(){
    document.getElementById('product-list').style.display = 'none';
    document.getElementById('cart').style.display = 'block';
    const cartItemsDiv=document.getElementById('cart-items');
    cartItemsDiv.innerHTML=
    cart.forEach((item,index)=>{
        cartItemsDiv.innerHTML +=`<div>
        <h3>${item.name}</h3>
        <p>Price:$${item.price}</p>
        <button onclick="removeFromCart(${index})">Remove</button>
        </div>`;
    });
}
function removeFromCart(index){
    cart.splice(index,1);
    showCart();
}
document.getElementById('checkout').addEventListener('click',function(){
    showCheckout();
});
function showCheckout(){
    document.getElementById('cart').style.display='none';
    document.getElementById('checkout-page').style.display='block';
}
document.getElementById('checkout-form').addEventListener('submit',function(e){
    e.preventDefault();
    const shippingaddress=document.getElementById('shipping-address').value;
    const billingaddress=document.getElementById('billing-address').value;
    const creditCard=document.getElementById('credit-card').value;

    if(shippingAddress && billingaddress && creditCard){
        document.getElementById('checkout-message').innerHTML="Purchase commpleted successfully!";
        cart=[];
    }else{
        document.getElementById('checkout-message').innerHTML="Please fill all fields.";
    }
});