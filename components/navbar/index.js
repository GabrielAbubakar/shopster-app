import Image from 'next/image'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { Container } from './navbar.styled'
import Logo from '../../public/assets/logo.svg'
import Cart from '../../public/assets/cart.svg'
import { storeCategory } from '../../redux/reducers/cart/cartSlice'


const Navbar = () => {

    const { currentCategory } = useSelector((state => state.persistedReducer.cart))

    const dispatch = useDispatch()


    return (
        <Container>
            <ul>
                <Link href='/'>
                    <li
                        onClick={() => dispatch(storeCategory('all'))}
                        style={{ color: currentCategory === 'all' && '#05cb05' }}>
                        All
                    </li>
                </Link>
                <Link href='/'>
                    <li
                        onClick={() => dispatch(storeCategory('tech'))}
                        style={{ color: currentCategory === 'tech' && '#05cb05' }}>
                        Tech
                    </li>
                </Link>
                <Link href='/'>
                    <li
                        onClick={() => dispatch(storeCategory('clothes'))}
                        style={{ color: currentCategory === 'clothes' && '#05cb05' }}>
                        Clothes
                    </li>
                </Link>
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