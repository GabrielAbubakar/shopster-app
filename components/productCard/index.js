import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'
import Cartsvg from '../../public/assets/addCart.svg'
import { Container } from './productCard.styled'
import { addToCart } from '../../redux/reducers/cart/cartSlice'

const ProductCard = (item) => {
    const { id, gallery, name, prices, inStock } = item
    const { currentCurrency } = useSelector((state => state.persistedReducer.cart))
    const dispatch = useDispatch();

    const itemVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 3,
                type: "spring",
            }
        },
    }

    return (
        <Container
            title='Click to view product details'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariant}
            style={{ filter: !inStock && 'grayscale(100)' }}>

            <Link href={'/products/' + id}>
                <a style={{ textDecoration: 'none', color: 'inherit' }}>
                    <p style={{ display: inStock ? 'none' : 'flex' }} className='inStock'>
                        Out of Stock
                    </p>
                    <figure>
                        <Image
                            src={gallery[0]}
                            alt={name}
                            width={356}
                            height={338} />
                    </figure>
                    <h3>{name}</h3>
                    {
                        prices.map(item => {
                            if (item.currency.label === currentCurrency) {
                                return <p key={item.currency.label}>{item.currency.symbol}{item.amount}</p>
                            }
                        })
                    }
                </a>

            </Link>
            {
                inStock ? (
                    <button label="addToCart" title={`Add ${name} to cart`} onClick={() => dispatch(addToCart(item))}>
                        <Image src={Cartsvg} alt="cart" />
                    </button>
                ) : (
                    <button label="addToCart" disabled title={`Sorry, ${name} is unavailable`} onClick={() => dispatch(addToCart(item))}>
                        <Image src={Cartsvg} alt="cart" />
                    </button>
                )
            }
        </Container>
    )
}

export default ProductCard