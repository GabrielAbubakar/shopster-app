import Image from 'next/image'
import Cartsvg from '../../public/assets/addCart.svg'
import { Container } from './productCard.styled'

const ProductCard = ({ img, name, addCart }) => {
    return (
        <Container>
            <figure>
                <Image src={img} alt={name} width={356} height={338} />
            </figure>
            <h3>{name}</h3>
            <p>${price}</p>
            <button>
                <Image src={Cartsvg} alt="cart" />
            </button>
        </Container>
    )
}

export default ProductCard