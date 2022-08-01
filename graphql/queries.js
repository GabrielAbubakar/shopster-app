import { gql } from "@apollo/client";


export const getProduct = gql`
    query {
        product(id: "huarache-x-stussy-le") {
            name
            inStock
            gallery
            description
            category
            attributes {
              id
              name
              type
              items {
                id
                value
                displayValue
              }
            }
            prices {
              currency {
                label
                symbol
              }
              amount
            }
          }
    }
`

export const getAllProducts = gql`
    query {
        category {
          name
            products {
                name
                id
                inStock
                gallery
                description
                category
                attributes {
                  id
                  name
                  type
                  items {
                    id
                    value
                    displayValue
                  }
                }
                prices {
                  currency {
                    label
                    symbol
                  }
                  amount
                }
            }
        }
    }
`

export const getProductsByCategory = gql`
    query getProductsBySpecificCategory($title: String!) {
        category(input: { title: $title }) {
          name
            products {
              name
              id
              inStock
              gallery
              description
              category
              attributes {
                id
                name
                type
                items {
                  id
                  value
                  displayValue
                }
              }
              prices {
                currency {
                  label
                  symbol
                }
                amount
              }
            }
          }
    }
`