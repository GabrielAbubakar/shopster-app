import { store } from "../redux/store"
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { GlobalStyles } from '../components/styled/Global.styled'

const persistor = persistStore(store);


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyles />
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}

export default MyApp
