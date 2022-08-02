import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Navbar from '../components/navbar'
import { GlobalStyles } from '../components/styled/Global.styled'
import client from '../graphql/apolloclient'
import { getAllProducts, getProductsByCategory } from '../graphql/queries'

import { increment, increNum } from '../redux/reducers/cart/cartSlice'

const Home = () => {
    const dispatch = useDispatch();

    const queryApi = async (category) => {
        const response = await client.query({
            query: getProductsByCategory,
            variables: {
                title: category
            }
        })
    }

    const number = useSelector((state) => state.persistedReducer.cart.value)

    const [num, setNum] = useState()

    const stateUpdate = () => {
        dispatch(increment())
    }

    const incrementNum = (num) => {
        dispatch(increNum(parseInt(num)))
    }

    console.log(useSelector((state) => state));


    return (
        <div>

            <GlobalStyles />
            <Navbar />

            <button onClick={() => queryApi('clothes')}>
                Query
            </button>

            <button onClick={() => stateUpdate()}>
                Click
            </button>

            <div>
                <input
                    value={num}
                    type="number"
                    onChange={(e) => setNum(e.target.value)} />

                <input
                    type="button"
                    value="Increase"
                    onClick={() => incrementNum(num)} />
            </div>

            <div>
                {number}
            </div>
        </div>
    )
}

export default Home