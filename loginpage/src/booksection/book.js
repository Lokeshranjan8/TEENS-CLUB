let openShop = document.querySelector('.shopping');
let closeShop = document.querySelector('.closeShopping');
// let list = document.querySelector('.list');
let listcart= document.querySelector('.listcart');
let body = document.body; 
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShop.addEventListener('click', () => {
    body.classList.add('active');
});

closeShop.addEventListener('click', () => {
    body.classList.remove('active');
});

let products=[
    {
        id:1,
        name:'prodcutname',
        img:'1.PNG',
        price:1220
    },
    {
        id:2,
        name:'prodcutname',
        img:'2.PNG',
        price:1220
    },{
        id:3,
        name:'prodcutname',
        img:'3.PNG',
        price:1220
    },{
        id:4,
        name:'prodcutname',
        img:'4.PNG',
        price:1220
    },{
        id:5,
        name:'prodcutname',
        img:'5.PNG',
        price:1220
    },{
        id:6,
        name:'prodcutname',
        img:'6.PNG',
        price:1220
    },
]

let listCarts = [];

function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.img}"/>
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add to Cart</button>
        `;
        listCarts.appendChild(newDiv);
    });
}

initApp();

function addToCard(key){
    if(listCarts[key]==null){
        listCarts[key]=products[key];
        listCarts[key].quantity=1;
    }
    reloadCard();

}

function reloadCard(){
    listCarts.innerHTML='';
    let count=0;
    let totalPrice=0;
    listCarts.forEach(value,key) => {
        totalPrice=totalPrice+value.price;
        count=count+value.quantity;

        if(value!=null){
            let newDiv=document.createElement('li');
            newDiv.innerHTML='';
        }

    }



}