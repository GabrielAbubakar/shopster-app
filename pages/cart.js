import { useEffect, useState } from "react"
import Image from "next/image"
import Head from "next/head"
import { useSelector, useDispatch } from 'react-redux'
import { storeCategory, incrementQuantity, decrementQuantity, clearCart } from '../redux/reducers/cart/cartSlice'
import Navbar from "../components/navbar"
import { Container, CartGrid, Item, ItemLeft, ItemRight, ImageBox, Buttons, Total, Modal } from "../components/styled/CartPage.styled"
import { AnimatePresence } from 'framer-motion'

import { getProduct } from "../graphql/queries"
import client from "../graphql/apolloclient"

const CartPage = () => {
    const dispatch = useDispatch()
    const { cart, currentCurrency } = useSelector((state => state.persistedReducer.cart))

    const [uiCart, setUiCart] = useState([])



    const fetchProducts = async (item) => {
        const res = await client.query({
            query: getProduct,
            variables: {
                id: item
            }
        })
        setUiCart([...uiCart, { ...res.data.product, quantity: 1 }])
    }


    useEffect(() => {
        cart.map((item) => {
            fetchProducts(item.itemId)
        })
    }, [])




    return (
        <div>
            {
                uiCart && uiCart.map((item, id) => (
                    <p key={id}>
                        {
                            item.name
                        }
                        {
                            console.log(uiCart)
                        }
                    </p>
                ))
            }
        </div>
    )
}

export default CartPage