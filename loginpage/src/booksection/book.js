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
    },
]
