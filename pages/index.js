import { useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import client from '../graphql/apolloclient'
// import { getAllProducts, getProductsByCategory } from '../graphql/queries'
import { GlobalStyles } from '../components/styled/Global.styled'
import { Container, Content, ProductGrid } from '../components/styled/Homepage.styled'
import Navbar from '../components/navbar'
import ProductCard from '../components/productCard'
import { } from '../redux/reducers/cart/cartSlice'

const Home = () => {

    const [products, setProducts] = useState([])


    return (
        <Container>

            <GlobalStyles />
            <Navbar />

            <Content>

                <h1>{ } Products</h1>

                <ProductGrid>
                    {/* {
                        products && products.map(item => (
                            <ProductCard
                                key={item.id}
                                name={item.name}
                                price={item.prices[0].amount}
                                img={item.gallery[0]}
                                id={item.id} />
                                
                            <ProductCard key={item.id} {...item} />
                        ))
                    } */}
                </ProductGrid>
            </Content>

        </Container>
    )
}

export default Home