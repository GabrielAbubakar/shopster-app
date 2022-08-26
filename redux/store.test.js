import { store } from './store'
import { addToCart, storeCategory, incrementQuantity, decrementQuantity, clearCart } from '../redux/reducers/cart/cartSlice'
import { item } from '../test-server/mock-data'
// import { render, screen } from '@testing-library/react'




describe("Tests on the Redux store", () => {
    // test 1
    it("Initial store state values", () => {

        const category = store.getState().persistedReducer.cart.currentCategory
        const cart = store.getState().persistedReducer.cart.cart
        const currency = store.getState().persistedReducer.cart.currentCurrency


        expect(cart).toEqual([])
        expect(category).toBe('')
        expect(currency).toBe('USD')
    })
})


describe("Tests on the various actions on the store", () => {

    // test 1
    it("Dispatch store category should work properly", () => {
        store.dispatch(storeCategory('tech'))
        const category = store.getState().persistedReducer.cart.currentCategory

        expect(category).toBe('tech')
    })

    // test 2
    it("Dispatch add to cart should work properly", () => {
        store.dispatch(addToCart(item))
        const cartItem = store.getState().persistedReducer.cart.cart[0]

        expect(cartItem.name).toBe(item.name)
    })

    it("Dispatch increment quantity should work properly", () => {

        const cart = store.getState().persistedReducer.cart.cart

        if (cart.length > 0) {

            store.dispatch(incrementQuantity(item.id))
            const cartItem = store.getState().persistedReducer.cart.cart[0]

            expect(cartItem.quantity).toBe(2)
        }
    })

    // test 4
    it("Dispatch decrement quantity should work properly", () => {

        store.dispatch(decrementQuantity(item.id))
        const cartItem = store.getState().persistedReducer.cart.cart[0]
        // const cat = store.getState().persistedReducer.cart.currentCategory

        expect(cartItem.quantity).toBe(1)
        // expect(cat).toBe('all')

    })

    // test 5
    it("Dispatch clear cart should work properly", () => {
        store.dispatch(clearCart())
        const cart = store.getState().persistedReducer.cart.cart

        expect(cart.length).toBe(0)
    })
})

