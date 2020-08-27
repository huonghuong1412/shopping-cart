let defaultState = [
    {
        id: 1,
        name: "Samsung 10",
        desc: "Mo ta san pham 1",
        price: 500,
        img: 'https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/2135168219.jpeg',
        inventory: 10,
        rating: 4,
    },
    {
        id: 2,
        name: "Samsung 11",
        desc: "Mo ta san pham 2",
        price: 600,
        img: 'https://didongviet.vn/pub/media/catalog/product//s/a/samsung-galaxy-a31.jpg',
        inventory: 8,
        rating: 5
    },
    {
        id: 3,
        name: "Samsung 12",
        desc: "Mo ta san pham 3",
        price: 800,
        img: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/6/3/636907526460907165_samsung-galaxy-a80-den-1_1_1_1_2.jpg',
        inventory: 5,
        rating: 4
    },
    {
        id: 4,
        name: "Samsung 16",
        desc: "Mo ta san pham 4",
        price: 1000,
        img: 'https://dienmaythienhoa.vn/static/images/4.%20hinh%20sp/Samsung-Galaxy-A30-Xanh-2.jpg',
        inventory: 20,
        rating: 3
    },
]

const products = (state = defaultState, action) => {
    switch(action.type) {
        default: 
            return [...state]
    }
}

export default products;