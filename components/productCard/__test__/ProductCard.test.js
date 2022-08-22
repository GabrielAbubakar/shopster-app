import { render, screen, fireEvent } from '@testing-library/react'
import { store } from "../../../redux/store"
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import ProductCard from '../index'
import { item } from '../../../test-server/mock-data';

const persistor = persistStore(store);


// Mocking the provider of the redux store
const MockProduct = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ProductCard {...item} />
            </PersistGate>
        </Provider>
    )
}


describe("Unit tests for the Card Component", () => {
    // test 1
    test("Should render the component completely", async () => {
        render(
            <MockProduct />
        )

        const imgElement = screen.getByRole('img')
        const nameElement = screen.getByRole('heading', { name: /Airtag/i })
        const cartImg = screen.getByAltText(/cart/i)

        expect(imgElement).toBeInTheDocument()
        expect(nameElement).toBeInTheDocument()
        expect(cartImg).toBeInTheDocument()
    })

    // test 2
    test("Should render out the props the component recieved", async () => {
        render(

        )
    })
})