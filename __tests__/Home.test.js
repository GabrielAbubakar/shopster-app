import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import { store } from "../redux/store"
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
// import Header from './Header'


const persistor = persistStore(store);
const MockedHome = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Home />
            </PersistGate>
        </Provider>
    )
}


describe("Tests for home page", () => {
    it("Should display the pages header", () => {
        render(
            <MockedHome />
        )

        const element = screen.getByRole('heading')
        expect(element).toBeInTheDocument()
    })


    it("Check if the page displays the fetched products correctly", async () => {
        render(
            <MockedHome />
        )

        const productCard = await screen.findAllByTitle(/product details/i)
        expect(productCard.length).toBe(8)
    })
})