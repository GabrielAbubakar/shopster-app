import { render, screen, fireEvent } from '@testing-library/react'
import { store } from "../../../redux/store"
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import ProductCard from '../index'

const persistor = persistStore(store);

// const item = {
//     name: "AirTag",
//     id: "apple-airtag",
//     inStock: true,
//     description: " <h1>Lose your knack for losing things.</h1> <p>AirTag is an easy way to keep track of your stuff. Attach one to your keys, slip another one in your backpack. And just like that, they’re on your radar in the Find My app. AirTag has your back.</p> ",
//     category: "tech",
//     brand: "Apple",
//     attributes: [],
//     quantity: 1
// }




const MockProduct = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ProductCard />
            </PersistGate>
        </Provider>
    )
}





describe("Run tests for the Navbar", () => {
    // test 1
    test("Should render Navbar component", async () => {
        render(
            // <MockProduct />
        )

        // const element = screen.ByRole('header')
        // expect(element).toBeInTheDocument()
    })


})