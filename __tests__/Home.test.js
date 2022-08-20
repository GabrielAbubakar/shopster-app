import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import { store } from "../redux/store"
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
// import Header from './Header'


const persistor = persistStore(store);


it("run test", () => {
    render(
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Home />
            </PersistGate>
        </Provider>
    )

    const element = screen.getByRole('heading')
    expect(element).toBeInTheDocument()
})