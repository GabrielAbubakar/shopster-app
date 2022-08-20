import { render, screen, fireEvent } from '@testing-library/react'
import Navbar from '../';
import { store } from "../../../redux/store"
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const persistor = persistStore(store);
const mockChangeCat = jest.fn()



describe("Run tests for the Navbar", () => {
    // test 1
    test("Should render Navbar component", async () => {
        render(
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <Navbar />
                </PersistGate>
            </Provider>
        )

        const element = screen.getByRole('navigation')
        expect(element).toBeInTheDocument()
    })

    // test 2
    test("Should change category state", async () => {
        render(
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <Navbar />
                </PersistGate>
            </Provider>
        )

        // const element = screen.getByText(/All/i)
        const element = screen.getByText(/All/i)
        // fireEvent.click(element)
        expect(element).toBeInTheDocument()
    })
})