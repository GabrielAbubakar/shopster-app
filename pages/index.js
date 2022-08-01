import React from 'react'
import Navbar from '../components/navbar'
import { GlobalStyles } from '../components/styled/Global.styled'
import client from '../graphql/apolloclient'
import { getAllProducts, getProductsByCategory } from '../graphql/queries'

const Home = () => {

    async function queryApi(category) {
        const response = await client.query({
            query: getProductsByCategory,
            variables: {
                title: category
            }
        })

        console.log(response);
    }


    return (
        <div>

            <GlobalStyles />
            <Navbar />

            <button onClick={() => queryApi('clothes')}>
                Query
            </button>
        </div>
    )
}

export default Home