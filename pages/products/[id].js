import Image from 'next/image'
import { useState, useEffect } from 'react'
import Navbar from '../../components/navbar'
import {
    Attributes,
    Container,
    ImageBox,
    ImageShowcase,
    ImagesRow,
    ItemDetails,
    Price,
    ProductGrid
} from '../../components/styled/ProductDetail.styled'
import client from '../../graphql/apolloclient'
import { getAllProducts, getProduct } from '../../graphql/queries'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/reducers/cart/cartSlice'



//Generate the paths for all products
export async function getStaticPaths() {
    const res = await client.query({
        query: getAllProducts,
    })

    const paths = res.data.category.products.map(item => {
        return {
            params: { id: item.id }
        }
    })

    return {
        paths: paths,
        fallback: false
    }
}

//Pass the appropriate product to the appropriate page
export async function getStaticProps({ params }) {
    return {
        props: {
            product: await client.query({
                query: getProduct,
                variables: {
                    id: params.id
                }
            })
        }
    }
}

//Init Page
const ProductDetails = ({ product }) => {

    const dispatch = useDispatch()
    const { currentCurrency, cart } = useSelector(state => state.persistedReducer.cart)
    const { name, gallery, brand, description, prices, inStock } = product.data.product
    const [activeImage, setActiveImage] = useState(0)

    return (
        <div>
            <Navbar />
            {
                product.loading ? (
                    <div>
                        Loading...
                    </div>
                ) : (
                    <Container

                    >
                        <ProductGrid>
                            <ImagesRow>
                                {
                                    gallery.map((item, i) => (
                                        <ImageBox
                                            key={item}
                                            className={activeImage === i && 'active'}
                                            onClick={() => setActiveImage(i)}
                                        >
                                            <Image src={item} alt='item' width={80} height={80} />
                                        </ImageBox>
                                    ))
                                }
                            </ImagesRow>
                            <ImageShowcase>
                                <Image
                                    src={gallery[activeImage]}
                                    alt='showcase'
                                    layout='fill'
                                    objectFit='contain'
                                    objectPosition='left'
                                    placeholder='blur'
                                    blurDataURL={gallery[activeImage]} />
                            </ImageShowcase>

                            <ItemDetails>
                                <div>
                                    <h3>{brand}</h3>
                                    <h2>{name}</h2>
                                </div>

                                <Price>
                                    <h4>Price</h4>
                                    {
                                        prices.map(item => {
                                            if (item.currency.label === currentCurrency) {
                                                return <p key={item.currency.label}>{item.currency.symbol}{item.amount}</p>
                                            }
                                        })
                                    }

                                    {
                                        cart && inStock && cart.find(item => item.name === name) ?
                                            <button
                                                disabled
                                                style={{ backgroundColor: '#333' }}
                                            >
                                                Added to Cart
                                            </button>
                                            : cart && !inStock ?
                                                <button
                                                    disabled
                                                    style={{ backgroundColor: '#333' }}
                                                    onClick={() => dispatch(addToCart(product.data.product))}>
                                                    Out of Stock
                                                </button>
                                                :
                                                <button onClick={() => dispatch(addToCart(product.data.product))}>
                                                    Add to Cart
                                                </button>
                                    }
                                </Price>

                                <p>
                                    {description.replace(/(<([^>]+)>)/gi, "").substring(0, 280)}
                                </p>
                            </ItemDetails>
                        </ProductGrid>
                    </Container>
                )
            }
        </div>
    )
}

export default ProductDetails