import Image from 'next/image'
import { useState } from 'react'
import Navbar from '../../components/navbar'
import { Container, ImageBox, ImageShowcase, ImagesRow, ItemDetails, ProductGrid } from '../../components/styled/ProductDetail.styled'
import client from '../../graphql/apolloclient'
import { getAllProducts, getProduct } from '../../graphql/queries'

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


const ProductDetails = ({ product }) => {

    const { name, gallery, brand, description, prices } = product.data.product
    // console.log(gallery);

    const [activeImage, setActiveImage] = useState(0)


    return (
        <div>
            <Navbar />
            {
                product.loading === true && (
                    <div>
                        Loading...
                    </div>
                )
            }

            {
                product.loading === false && (
                    <Container>

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
                                    <h2>{name}</h2>
                                    <h3>{brand}</h3>
                                </div>

                                <div>

                                </div>

                                <div>

                                </div>

                                <div>
                                    <h4>Price</h4>
                                    <p>
                                        {`${prices[0].currency.symbol}${prices[0].amount}`}
                                    </p>

                                    <button>Add to Cart</button>
                                </div>

                                <p>
                                    {description.replace(/(<([^>]+)>)/gi, "")}
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