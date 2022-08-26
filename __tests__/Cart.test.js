import { render, screen } from '@testing-library/react'
import Cart from '../pages/cart'
import { store } from "../redux/store"
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';


const persistor = persistStore(store);


const MockedCart = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Cart />
            </PersistGate>
        </Provider>
    )
}


describe("Tests for cart page", () => {
    it("Should display the pages header", () => {
        render(
            <MockedCart />
        )

        const element = screen.getByRole('heading', { name: /cart/i })
        expect(element).toBeInTheDocument()
    })


    // it("Check if the page displays the fetched products correctly", async () => {
    //     render(
    //         <MockedCart />
    //     )

    //     const productCard = await screen.findAllByTitle(/product details/i)
    //     expect(productCard.length).toBe(8)
    // })
})