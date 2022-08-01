import Image from 'next/image'
import { Container } from './navbar.styled'
import Logo from '../../public/assets/logo.svg'
import Cart from '../../public/assets/cart.svg'

const Navbar = () => {
    return (
        <Container>
            <ul>
                <li>All</li>
                <li>Tech</li>
                <li>Clothes</li>
            </ul>

            <div className='logo'>
                <Image src={Logo} alt="shopster" title='shopster logo' />
            </div>

            <div className='shopping'>
                <div>

                </div>
                <div>
                    <Image src={Cart} alt="cart" title='cart' />
                </div>
            </div>
        </Container>
    )
}

export default Navbar