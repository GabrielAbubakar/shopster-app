import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useSelector, useDispatch } from 'react-redux'
import client from '../graphql/apolloclient'
import { getAllProducts, getProductsByCategory } from '../graphql/queries'
import { Container, Content, ProductGrid } from '../components/styled/Homepage.styled'
import Navbar from '../components/navbar'
import ProductCard from '../components/productCard'
import { storeCategory } from '../redux/reducers/cart/cartSlice'

// Server Side Generation (at request time)
export async function getServerSideProps() {
    const res = await client.query({
        query: getAllProducts,
    })

    return {
        props: {
            productsData: res.data.category.products,
            categoryData: res.data.category.name,
        },
    }
}

const Home = ({ productsData }) => {

    const dispatch = useDispatch();
    const { currentCategory } = useSelector((state => state.persistedReducer.cart))
    const [products, setProducts] = useState(productsData)



    const fetchCategory = async (cat) => {
        const res = await client.query({
            query: getProductsByCategory,
            variables: {
                title: cat
            }
        })
        setProducts(res.data.category.products)
        dispatch(storeCategory(res.data.category.name))
    }

    useEffect(() => {
        fetchCategory(currentCategory);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentCategory])


    return (
        <Container>
            <Head>
                <title>Shopster Ecommerce</title>
                <meta name="description" content="Shopster Ecommerce" />
                <link rel="icon" href="🛒" />
                {/* <link rel="icon" href="😁" /> */}
            </Head>
            <Navbar />
            <Content>
                <h1>{currentCategory} Products</h1>
                <ProductGrid>
                    {
                        // Sort a copy of the products alphabetically and then map into JSX card components
                        products && [...products].sort((a, b) => a.name.localeCompare(b.name)).map(item => (
                            <ProductCard key={item.id} {...item} />
                        ))
                    }
                </ProductGrid>
            </Content>
        </Container>
    )
}

export default Home