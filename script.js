const baseUrl = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
const getListUrl = '/catalogData.json';
const getBasketUrl = '/getBasket.json';
const addToBasketUrl = '/addToBasket.json';
const removeFromBasketUrl = '/deleteFromBasket.json';

let goods = [{
        title: 'Shirt',
        price: 150
    },
    {
        title: 'Socks',
        price: 50
    },
    {
        title: 'Jacket',
        price: 350
    },
    {
        title: 'Shoes',
        price: 250
    }
];

const basketName = 'Добавить в корзину';

const renderList = (items) => {
    return items.map(item => {
        const isAdded = true;
        const basketName = isAdded ? 'Добавить в корзину' : 'Убрать из корзины';
        const basketUrl = isAdded ? `${baseUrl}${addToBasketUrl}` : `${baseUrl}${removeFromBasketUrl}`;
        return `
            <div class="goods-list__item">
                <img />
                <span class="heading">${item.product_name}</span>
                <a class="button" href="${basketUrl}">${basketName}</a>
            </div>
        `;
    }).join('');
}

const insertCode = (container, html) => {
    container.innerHTML = html;
};

class Product {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    addToBasket() {

    }

    render() {
        return `
            <div class="goods-list__item">
                <img />
                <span class="heading">${this.title}</span>
                <span class="price">${this.price}</span>
                <a class="button" href="#">${basketName}</a>
            </div>
        `;
    }
}

class Goods {
    constructor(goods) {
        this.goods = goods;
    }

    sumCartPrice() {
        let sumPrice = document.querySelector('.goods-list__item');
        let sum = 0;
        this.goods.forEach(price => {
            sum += this.price
        })
        totalPrice.innerHTML = `Итого: ${sum} рублей`;
    }

    render(container) {
        let html = '';
        for (let i in this.goods) {
            const goodsItem = this.goods[i];
            html += goodsItem.render();
        }
        container.innerHTML = html;
    }
}

(async () => {

})()

document.addEventListener('DOMContentLoaded', async () => {
    let isBasketOpen = false;
    const listElement = document.querySelector('.goods-list');
    //const r = await fetch(`${baseUrl}${getListUrl}`);
    // goods = await r.json();

    const items = goods.map((product) => new Product(product.title, product.price));
    const goodsList = new Goods(items);

    console.log(goods);

    //insertCode(listElement, renderList(goods));
    goodsList.render(listElement);





    const cartBtn = document.querySelector('.cart-button');
    const cart = document.querySelector('.basket');

    cartBtn.addEventListener('click', () => {
        isBasketOpen = !isBasketOpen;
        cart.style.display = isBasketOpen ? 'block' : 'none';
    });
});