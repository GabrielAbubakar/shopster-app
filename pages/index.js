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
        dispatch(storeCategory(categoryData))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoryData])


    return (
        <Container>

            <GlobalStyles />
            <Navbar fetchCategoryFunc={fetchCategory} />

            <Content>

                <h1>{currentCategory} Products</h1>

                <ProductGrid>
                    {
                        products && products.map(item => (
                            <ProductCard key={item.id} {...item} />
                        ))
                    }
                </ProductGrid>
            </Content>

        </Container>
    )
}

export default Home