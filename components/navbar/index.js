import Image from 'next/image'
import { useSelector } from 'react-redux'
import { Container } from './navbar.styled'
import Logo from '../../public/assets/logo.svg'
import Cart from '../../public/assets/cart.svg'

const Navbar = () => {

    const { currentCategory } = useSelector((state => state.persistedReducer.cart))

    return (
        <Container>
            <ul>
                <li style={{ color: currentCategory === 'all' && '#05cb05' }}>All</li>
                <li style={{ color: currentCategory === 'tech' && '#05cb05' }}>Tech</li>
                <li style={{ color: currentCategory === 'clothes' && '#05cb05' }}>Clothes</li>
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