import { render, screen } from '@testing-library/react'
import Navbar from '../components/navbar';
import { store } from "../redux/store"
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';


const persistor = persistStore(store);

describe("Run tests for the Navbar", () => {
    test("Test 1", () => {
        render(
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <Navbar />
                </PersistGate>
            </Provider>
        )

        // const element = screen.getByRole('heading')
        // expect(element).toBeInTheDocument()
    })
})