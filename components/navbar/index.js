import Image from 'next/image'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { Container, CartDiv } from './navbar.styled'
import Logo from '../../public/assets/logo.svg'
import Cart from '../../public/assets/cart.svg'
import { changeCurrency, storeCategory } from '../../redux/reducers/cart/cartSlice'
import { useEffect, useState } from 'react'
import { getCurrencies } from '../../graphql/queries'
import client from '../../graphql/apolloclient'


const Navbar = () => {

    const { currentCategory, cart, currentCurrency } = useSelector((state => state.persistedReducer.cart))

    const [totalQuantity, setTotalQuantity] = useState()
    const [currencies, setCurrencies] = useState()

    const dispatch = useDispatch()


    async function getCurr() {
        const res = await client.query({
            query: getCurrencies,
        })

        setCurrencies(res.data.currencies)
        // console.log(res.data.currencies)
    }

    useEffect(() => {
        getCurr()
    }, [])





    useEffect(() => {
        const sum = 0;
        cart.map(item => {
            sum += item.quantity
        })
        setTotalQuantity(sum)
    }, [cart])


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
                {/* <select name="" id="" onChange={(e) => dispatch(changeCurrency(currencies[e.target.selectedIndex].label))}> */}
                <select name="" id="" onChange={(e) => dispatch(changeCurrency(e.target.value))}>
                    {/* <select name="" id="" onChange={(e) => console.log(e.target.options)}> */}
                    {
                        currencies && currencies.map(item => (
                            <option
                                key={item.label}
                                value={item.label}>
                                {item.label}
                            </option>
                        ))
                    }
                </select>

                <CartDiv>
                    <p>{totalQuantity}</p>
                    <Link href='/cart'>
                        <Image src={Cart} alt="cart" title='cart' width={30} height={30} />
                    </Link >
                </CartDiv>
            </div>
        </Container>
    )
}

export default Navbar