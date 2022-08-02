import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import client from '../graphql/apolloclient'
import { getAllProducts, getProductsByCategory } from '../graphql/queries'
import { GlobalStyles } from '../components/styled/Global.styled'
import { Container, Content, ProductGrid } from '../components/styled/Homepage.styled'
import Navbar from '../components/navbar'
import ProductCard from '../components/productCard'
import { storeCategory } from '../redux/reducers/cart/cartSlice'




export async function getStaticProps() {
    const res = await client.query({
        query: getAllProducts,
    })

    return {
        props: {
            productsData: res.data.category.products,
            categoryData: res.data.category.name,
        },
        revalidate: 1
    }
}



const Home = ({ productsData, categoryData }) => {

    const dispatch = useDispatch();
    const { currentCategory } = useSelector((state => state.persistedReducer.cart))

    const [products, setProducts] = useState(productsData)




    useEffect(() => {
        dispatch(storeCategory(categoryData))
    }, [categoryData])

    return (
        <Container>

            <GlobalStyles />
            <Navbar />

            <Content>

                <h1>{currentCategory} Products</h1>

                <ProductGrid>
                    {
                        products && products.map(item => (
                            // <ProductCard
                            //     key={item.id}
                            //     name={item.name}
                            //     price={item.prices[0].amount}
                            //     img={item.gallery[0]}
                            //     id={item.id} />

                            <ProductCard key={item.id} {...item} />
                        ))
                    }
                </ProductGrid>
            </Content>

        </Container>
    )
}

export default Home