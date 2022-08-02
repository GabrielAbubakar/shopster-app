import Image from 'next/image'
import Cartsvg from '../../public/assets/addCart.svg'
import { Container } from './productCard.styled'

const ProductCard = ({ gallery, name, addCart, prices }) => {
    return (
        <Container>
            <figure>
                <Image
                    // src={gallery}
                    src={''}
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
    )
}

export default ProductCard