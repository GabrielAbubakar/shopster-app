import { useEffect, useState } from "react"
import Image from "next/image"
import { useSelector, useDispatch } from 'react-redux'
import { storeCategory, incrementQuantity, decrementQuantity, clearCart } from '../redux/reducers/cart/cartSlice'
import Navbar from "../components/navbar"
import { Container, CartGrid, Item, ItemLeft, ItemRight, ImageBox, Buttons, Total, Modal } from "../components/styled/CartPage.styled"
import { AnimatePresence } from 'framer-motion'

const CartPage = () => {
    const dispatch = useDispatch()
    const { cart, currentCurrency } = useSelector((state => state.persistedReducer.cart))

    const [totalQuantity, setTotalQuantity] = useState()
    const [itemGroup, setItemGroup] = useState()
    const [totalPrice, setTotalPrice] = useState()

    const [displayModal, setDisplayModal] = useState(false)

    const itemVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 3,
                type: "spring",
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 3,
                type: "spring",
            }
        }
    }

    const orderProducts = () => {
        if (cart.length) {
            dispatch(clearCart())
            setDisplayModal(true)
            setTimeout(() => {
                setDisplayModal(false)
            }, 3000);
        }
    }


    useEffect(() => {
        //Calculate the total price to be paid based on currently active currency / Happens on cart and currentCurrency state change
        const total = 0
        const priceArr = []
        cart.map((item, i) => {
            priceArr.push(item.prices.find((item) => item.currency.label === currentCurrency))
            total += priceArr[i].amount * item.quantity
        })
        setTotalPrice(total)
    }, [cart, currentCurrency])

    useEffect(() => {
        //Calculate the total quantities on cart state change
        const sum = 0;
        const group = 0;
        cart.map(item => {
            sum += item.quantity
            group++
        })
        setTotalQuantity(sum)
        setItemGroup(group)
    }, [cart])

    useEffect(() => {
        //Change category to all on page load
        dispatch(storeCategory('all'))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <Container>
            <Navbar />
            <h1>CART</h1>
            <AnimatePresence>
                <Modal
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ display: displayModal ? 'block' : 'none' }}
                >
                    <h2>Your items will be delivered to your location🚚🚚🚚</h2>
                </Modal>
            </AnimatePresence>
            <CartGrid
                style={{ display: displayModal ? 'none' : 'block' }}
            >
                {
                    cart == false ?
                        <h1>
                            No Items <br />
                            <span>
                                Don&apos;t leave without getting something nice🛒
                            </span>
                        </h1>
                        :
                        //Animate Prescence for animating components out of views
                        <AnimatePresence>
                            {
                                cart.map((item, index) => (
                                    <Item key={index}
                                        initial="hidden"
                                        whileInView="visible"
                                        exit="exit"
                                        viewport={{ once: true }}
                                        variants={itemVariant}
                                    >
                                        <ItemLeft>
                                            <h3>{item.brand}</h3>
                                            <h2>{item.name}</h2>
                                            {
                                                item.prices.map(item => {
                                                    if (item.currency.label === currentCurrency) {
                                                        return <p key={item.currency.label}>{item.currency.symbol}{item.amount}</p>
                                                    }
                                                })
                                            }
                                        </ItemLeft>
                                        <Buttons>
                                            <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                                            <p>{item.quantity}</p>
                                            <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                                        </Buttons>
                                        {/* <ItemRight> */}
                                        <ImageBox>
                                            <Image
                                                src={item.gallery[0]}
                                                alt='item'
                                                width={80}
                                                height={80}
                                                layout='fill'
                                                objectFit='contain'
                                                objectPosition='left'
                                                placeholder='blur'
                                                blurDataURL={item.gallery[0]}
                                            />
                                        </ImageBox>
                                        {/* </ItemRight> */}
                                    </Item>
                                ))
                            }
                        </AnimatePresence>
                }

                <Total>
                    <p>Item Groups: {itemGroup}</p>
                    <p>Total Quantity: {totalQuantity}</p>
                    <p>Total Price: {totalPrice && totalPrice.toFixed(2)} {currentCurrency}</p>
                    <button onClick={() => dispatch(clearCart())}>Clear Cart🚮</button>
                    <button onClick={() => orderProducts()}>ORDER</button>
                </Total>
            </CartGrid>
        </Container>
    )
}

export default CartPage