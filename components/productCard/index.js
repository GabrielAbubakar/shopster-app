import Image from 'next/image'
import Link from 'next/link'
import Cartsvg from '../../public/assets/addCart.svg'
import { Container } from './productCard.styled'

const ProductCard = ({ id, gallery, name, addCart, prices }) => {
    return (
        <Link href={'/products/' + id}>
            <Container>
                <figure>
                    <Image
                        src={gallery[0]}
                        alt={name}
                        width={356}
                        height={338} />
                </figure>
                <h3>{name}</h3>
                <p>${prices[0].amount}</p>
                <button>
                    <Image src={Cartsvg} alt="cart" />
                </button>
            </Container>
        </Link>
    )
}

export default ProductCard