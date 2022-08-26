import { render, screen, fireEvent } from '@testing-library/react'
import Navbar from '../';
import { store } from "../../../redux/store"
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const persistor = persistStore(store);
const mockChangeCat = jest.fn()

const MockNavbar = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Navbar />
            </PersistGate>
        </Provider>
    )
}



describe("Run tests for the Navbar", () => {
    // test 1
    test("Should render Navbar component and tab items", async () => {
        render(
            <MockNavbar />
        )

        const element = screen.getByRole('navigation')
        const navItems = screen.getAllByRole('listitem')
        expect(navItems.length).toBe(3)
        expect(element).toBeInTheDocument()
    })

})