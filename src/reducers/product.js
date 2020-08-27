let defaultState = [
    {
        id: 1,
        name: "Samsung 10",
        desc: "Mo ta san pham 1",
        price: 500,
        inventory: 10
    },
    {
        id: 2,
        name: "Samsung 11",
        desc: "Mo ta san pham 2",
        price: 600,
        inventory: 8
    },
    {
        id: 3,
        name: "Samsung 12",
        desc: "Mo ta san pham 3",
        price: 800,
        inventory: 5
    },
]

const product = (state = defaultState, action) => {
    switch(action.type) {
        default: 
            return [...state]
    }
}

export default product