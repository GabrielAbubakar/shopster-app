import Navbar from '../../components/navbar'
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
                    <div>
                        <h1>{product.data.product.name}</h1>
                    </div>
                )
            }
        </div>
    )
}

export default ProductDetails