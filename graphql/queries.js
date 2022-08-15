import { gql } from "@apollo/client";



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
                brand
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

export const getProduct = gql`
    query getProduct($id: String!) {
        product(id: $id) {
            id
            name
            inStock
            gallery
            description
            category
            brand
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
              brand
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

export const getCurrencies = gql`
  query {
    currencies {
      label
      symbol
    }
  }
`