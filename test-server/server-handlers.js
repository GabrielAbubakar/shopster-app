// server-handlers.js
// this is put into here so I can share these same handlers between my tests
// as well as my development in the browser. Pretty sweet!
import { graphql } from 'msw' // msw supports graphql too!
import category from './mock-data'

const api = graphql.link("http://localhost:4000/")

const handlers = [
    api.query("getAllProducts", (req, res, ctx) => {
        return res(
            // returns data.the object that is returned
            ctx.data({
                category
            })
        )
    }),
    api.query("getProductsByCategory", (req, res, ctx) => {
        return res(
            // returns data.the object that is returned
            ctx.data({
                category
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