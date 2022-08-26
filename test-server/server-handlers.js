// server-handlers.js
// this is put into here so I can share these same handlers between my tests
// as well as my development in the browser. Pretty sweet!
import { graphql } from 'msw' // msw supports graphql too!

const api = graphql.link("http://localhost:4000/")

const handlers = [
    api.query("getAllProducts", (req, res, ctx) => {
        return res(
            // returns data.the object that is returned
            ctx.data({
                category: {
                    name: "all",
                    products: [
                        {
                            id: "huarache-x-stussy-le",
                            brand: "Nike x Stussy",
                            name: "Nike Air Huarache Le",
                            inStock: true,
                            gallery: [
                                "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087",
                                "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_1_720x.jpg?v=1612816087",
                                "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_3_720x.jpg?v=1612816087",
                                "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_5_720x.jpg?v=1612816087",
                                "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_4_720x.jpg?v=1612816087"
                            ],
                            description: "<p>Great sneakers for everyday use!</p>",
                            category: "clothes",
                            attributes: [
                                {
                                    id: "Size",
                                    name: "Size",
                                    type: "text",
                                    items: [
                                        {
                                            id: "40",
                                            value: "40",
                                            displayValue: "40"
                                        },
                                        {
                                            id: "41",
                                            value: "41",
                                            displayValue: "41"
                                        },
                                        {
                                            id: "42",
                                            value: "42",
                                            displayValue: "42"
                                        },
                                        {
                                            id: "43",
                                            value: "43",
                                            displayValue: "43"
                                        }
                                    ]
                                }
                            ],
                            prices: [
                                {
                                    currency: {
                                        label: "USD",
                                        symbol: "$"
                                    },
                                    amount: 144.69
                                },
                                {
                                    currency: {
                                        label: "GBP",
                                        symbol: "£"
                                    },
                                    amount: 104
                                },
                                {
                                    currency: {
                                        label: "AUD",
                                        symbol: "A$"
                                    },
                                    amount: 186.65
                                },
                                {
                                    currency: {
                                        label: "JPY",
                                        symbol: "¥"
                                    },
                                    amount: 15625.24
                                },
                                {
                                    currency: {
                                        label: "RUB",
                                        symbol: "₽"
                                    },
                                    amount: 10941.76
                                }
                            ]
                        },
                        {
                            id: "jacket-canada-goosee",
                            brand: "Canada Goose",
                            name: "Jacket",
                            inStock: true,
                            gallery: [
                                "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg",
                                "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016107/product-image/2409L_61_a.jpg",
                                "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016108/product-image/2409L_61_b.jpg",
                                "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016109/product-image/2409L_61_c.jpg",
                                "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016110/product-image/2409L_61_d.jpg",
                                "https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058169/product-image/2409L_61_o.png",
                                "https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058159/product-image/2409L_61_p.png"
                            ],
                            description: "<p>Awesome winter jacket</p>",
                            category: "clothes",
                            attributes: [
                                {
                                    id: "Size",
                                    name: "Size",
                                    type: "text",
                                    items: [
                                        {
                                            id: "Small",
                                            value: "S",
                                            displayValue: "Small"
                                        },
                                        {
                                            id: "Medium",
                                            value: "M",
                                            displayValue: "Medium"
                                        },
                                        {
                                            id: "Large",
                                            value: "L",
                                            displayValue: "Large"
                                        },
                                        {
                                            id: "Extra Large",
                                            value: "XL",
                                            displayValue: "Extra Large"
                                        }
                                    ]
                                }
                            ],
                            prices: [
                                {
                                    currency: {
                                        label: "USD",
                                        symbol: "$"
                                    },
                                    amount: 518.47
                                },
                                {
                                    currency: {
                                        label: "GBP",
                                        symbol: "£"
                                    },
                                    amount: 372.67
                                },
                                {
                                    currency: {
                                        label: "AUD",
                                        symbol: "A$"
                                    },
                                    amount: 668.83
                                },
                                {
                                    currency: {
                                        label: "JPY",
                                        symbol: "¥"
                                    },
                                    amount: 55990.46
                                },
                                {
                                    currency: {
                                        label: "RUB",
                                        symbol: "₽"
                                    },
                                    amount: 39207.96
                                }
                            ]
                        },
                        {
                            id: "ps-5",
                            brand: "Sony",
                            name: "PlayStation 5",
                            inStock: false,
                            gallery: [
                                "https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg",
                                "https://images-na.ssl-images-amazon.com/images/I/610%2B69ZsKCL._SL1500_.jpg",
                                "https://images-na.ssl-images-amazon.com/images/I/51iPoFwQT3L._SL1230_.jpg",
                                "https://images-na.ssl-images-amazon.com/images/I/61qbqFcvoNL._SL1500_.jpg",
                                "https://images-na.ssl-images-amazon.com/images/I/51HCjA3rqYL._SL1230_.jpg"
                            ],
                            description: "<p>A good gaming console. Plays games of PS4! Enjoy if you can buy it mwahahahaha</p>",
                            category: "tech",
                            attributes: [
                                {
                                    id: "Color",
                                    name: "Color",
                                    type: "swatch",
                                    items: [
                                        {
                                            id: "Green",
                                            value: "#44FF03",
                                            displayValue: "Green"
                                        },
                                        {
                                            id: "Cyan",
                                            value: "#03FFF7",
                                            displayValue: "Cyan"
                                        },
                                        {
                                            id: "Blue",
                                            value: "#030BFF",
                                            displayValue: "Blue"
                                        },
                                        {
                                            id: "Black",
                                            value: "#000000",
                                            displayValue: "Black"
                                        },
                                        {
                                            id: "White",
                                            value: "#FFFFFF",
                                            displayValue: "White"
                                        }
                                    ]
                                },
                                {
                                    id: "Capacity",
                                    name: "Capacity",
                                    type: "text",
                                    items: [
                                        {
                                            id: "512G",
                                            value: "512G",
                                            displayValue: "512G"
                                        },
                                        {
                                            id: "1T",
                                            value: "1T",
                                            displayValue: "1T"
                                        }
                                    ]
                                }
                            ],
                            prices: [
                                {
                                    currency: {
                                        label: "USD",
                                        symbol: "$"
                                    },
                                    amount: 844.02
                                },
                                {
                                    currency: {
                                        label: "GBP",
                                        symbol: "£"
                                    },
                                    amount: 606.67
                                },
                                {
                                    currency: {
                                        label: "AUD",
                                        symbol: "A$"
                                    },
                                    amount: 1088.79
                                },
                                {
                                    currency: {
                                        label: "JPY",
                                        symbol: "¥"
                                    },
                                    amount: 91147.25
                                },
                                {
                                    currency: {
                                        label: "RUB",
                                        symbol: "₽"
                                    },
                                    amount: 63826.91
                                }
                            ]
                        },
                    ]
                }
            })
        )
    }),
    api.query("getProductsByCategory", (req, res, ctx) => {
        return res(
            // returns data.the object that is returned
            ctx.data({
                category: {
                    name: "all",
                    products: [
                        {
                            id: "huarache-x-stussy-le",
                            brand: "Nike x Stussy",
                            name: "Nike Air Huarache Le",
                            inStock: true,
                            gallery: [
                                "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087",
                                "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_1_720x.jpg?v=1612816087",
                                "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_3_720x.jpg?v=1612816087",
                                "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_5_720x.jpg?v=1612816087",
                                "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_4_720x.jpg?v=1612816087"
                            ],
                            description: "<p>Great sneakers for everyday use!</p>",
                            category: "clothes",
                            attributes: [
                                {
                                    id: "Size",
                                    name: "Size",
                                    type: "text",
                                    items: [
                                        {
                                            id: "40",
                                            value: "40",
                                            displayValue: "40"
                                        },
                                        {
                                            id: "41",
                                            value: "41",
                                            displayValue: "41"
                                        },
                                        {
                                            id: "42",
                                            value: "42",
                                            displayValue: "42"
                                        },
                                        {
                                            id: "43",
                                            value: "43",
                                            displayValue: "43"
                                        }
                                    ]
                                }
                            ],
                            prices: [
                                {
                                    currency: {
                                        label: "USD",
                                        symbol: "$"
                                    },
                                    amount: 144.69
                                },
                                {
                                    currency: {
                                        label: "GBP",
                                        symbol: "£"
                                    },
                                    amount: 104
                                },
                                {
                                    currency: {
                                        label: "AUD",
                                        symbol: "A$"
                                    },
                                    amount: 186.65
                                },
                                {
                                    currency: {
                                        label: "JPY",
                                        symbol: "¥"
                                    },
                                    amount: 15625.24
                                },
                                {
                                    currency: {
                                        label: "RUB",
                                        symbol: "₽"
                                    },
                                    amount: 10941.76
                                }
                            ]
                        },
                        {
                            id: "jacket-canada-goosee",
                            brand: "Canada Goose",
                            name: "Jacket",
                            inStock: true,
                            gallery: [
                                "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg",
                                "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016107/product-image/2409L_61_a.jpg",
                                "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016108/product-image/2409L_61_b.jpg",
                                "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016109/product-image/2409L_61_c.jpg",
                                "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016110/product-image/2409L_61_d.jpg",
                                "https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058169/product-image/2409L_61_o.png",
                                "https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058159/product-image/2409L_61_p.png"
                            ],
                            description: "<p>Awesome winter jacket</p>",
                            category: "clothes",
                            attributes: [
                                {
                                    id: "Size",
                                    name: "Size",
                                    type: "text",
                                    items: [
                                        {
                                            id: "Small",
                                            value: "S",
                                            displayValue: "Small"
                                        },
                                        {
                                            id: "Medium",
                                            value: "M",
                                            displayValue: "Medium"
                                        },
                                        {
                                            id: "Large",
                                            value: "L",
                                            displayValue: "Large"
                                        },
                                        {
                                            id: "Extra Large",
                                            value: "XL",
                                            displayValue: "Extra Large"
                                        }
                                    ]
                                }
                            ],
                            prices: [
                                {
                                    currency: {
                                        label: "USD",
                                        symbol: "$"
                                    },
                                    amount: 518.47
                                },
                                {
                                    currency: {
                                        label: "GBP",
                                        symbol: "£"
                                    },
                                    amount: 372.67
                                },
                                {
                                    currency: {
                                        label: "AUD",
                                        symbol: "A$"
                                    },
                                    amount: 668.83
                                },
                                {
                                    currency: {
                                        label: "JPY",
                                        symbol: "¥"
                                    },
                                    amount: 55990.46
                                },
                                {
                                    currency: {
                                        label: "RUB",
                                        symbol: "₽"
                                    },
                                    amount: 39207.96
                                }
                            ]
                        },
                        {
                            id: "ps-5",
                            brand: "Sony",
                            name: "PlayStation 5",
                            inStock: false,
                            gallery: [
                                "https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg",
                                "https://images-na.ssl-images-amazon.com/images/I/610%2B69ZsKCL._SL1500_.jpg",
                                "https://images-na.ssl-images-amazon.com/images/I/51iPoFwQT3L._SL1230_.jpg",
                                "https://images-na.ssl-images-amazon.com/images/I/61qbqFcvoNL._SL1500_.jpg",
                                "https://images-na.ssl-images-amazon.com/images/I/51HCjA3rqYL._SL1230_.jpg"
                            ],
                            description: "<p>A good gaming console. Plays games of PS4! Enjoy if you can buy it mwahahahaha</p>",
                            category: "tech",
                            attributes: [
                                {
                                    id: "Color",
                                    name: "Color",
                                    type: "swatch",
                                    items: [
                                        {
                                            id: "Green",
                                            value: "#44FF03",
                                            displayValue: "Green"
                                        },
                                        {
                                            id: "Cyan",
                                            value: "#03FFF7",
                                            displayValue: "Cyan"
                                        },
                                        {
                                            id: "Blue",
                                            value: "#030BFF",
                                            displayValue: "Blue"
                                        },
                                        {
                                            id: "Black",
                                            value: "#000000",
                                            displayValue: "Black"
                                        },
                                        {
                                            id: "White",
                                            value: "#FFFFFF",
                                            displayValue: "White"
                                        }
                                    ]
                                },
                                {
                                    id: "Capacity",
                                    name: "Capacity",
                                    type: "text",
                                    items: [
                                        {
                                            id: "512G",
                                            value: "512G",
                                            displayValue: "512G"
                                        },
                                        {
                                            id: "1T",
                                            value: "1T",
                                            displayValue: "1T"
                                        }
                                    ]
                                }
                            ],
                            prices: [
                                {
                                    currency: {
                                        label: "USD",
                                        symbol: "$"
                                    },
                                    amount: 844.02
                                },
                                {
                                    currency: {
                                        label: "GBP",
                                        symbol: "£"
                                    },
                                    amount: 606.67
                                },
                                {
                                    currency: {
                                        label: "AUD",
                                        symbol: "A$"
                                    },
                                    amount: 1088.79
                                },
                                {
                                    currency: {
                                        label: "JPY",
                                        symbol: "¥"
                                    },
                                    amount: 91147.25
                                },
                                {
                                    currency: {
                                        label: "RUB",
                                        symbol: "₽"
                                    },
                                    amount: 63826.91
                                }
                            ]
                        },
                    ]
                }
            })
        )
    }),
    api.query("getCurrencies", (req, res, ctx) => {
        return res(
            ctx.data({
                currencies: [
                    {
                        label: "USD",
                        symbol: "$"
                    },
                    {
                        label: "GBP",
                        symbol: "£"
                    },
                    {
                        label: "AUD",
                        symbol: "A$"
                    },
                    {
                        label: "JPY",
                        symbol: "¥"
                    },
                    {
                        label: "RUB",
                        symbol: "₽"
                    }
                ]
            })
        )
    }),
]

export { handlers }