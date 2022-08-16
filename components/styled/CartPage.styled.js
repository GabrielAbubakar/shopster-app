import styled from "styled-components";
import { motion } from "framer-motion";
import { devices } from "./mediaqueries";



export const Container = styled(motion.div)`

    h1 {
        margin-bottom: 3rem;

        span {
            color: #444;
            font-size: 1.5rem;
        }
    }
`

export const CartGrid = styled(motion.div)`

`

export const Item = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    border-top: 2px solid #eee;
    padding: 2rem 0;
    gap: 1rem;


    @media ${devices.tablet} {
    }
    /* &>* {
        flex: 1;
    } */
`

export const ItemLeft = styled(motion.div)`

    h3 {
        font-weight: 800;
        color: #555;
        font-size: 1.3rem;

        @media ${devices.mobileL} {
            font-size: 1rem;
        }
    }

    h2 {
        @media ${devices.tablet} {
            font-size: 1.5rem;
        }
    }
`

export const ItemRight = styled(motion.div)`
    /* display: flex;
    justify-content: center; */
`


export const Buttons = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;

    button {
        font-size: 1.3rem;
        padding: .4rem .8rem;
        cursor: pointer;
    }
`

export const ImageBox = styled(motion.div)`
    width: 200px;
    height: 200px;
    position: relative;
    border: 3px solid #eee;
`

export const Total = styled(motion.div)`
    padding: 2rem 0;
    border-top: 2px solid #eee;

    p {
        margin-bottom: .7rem;
    }

    button:last-of-type {
        cursor: pointer;
        display: block;
        margin-top: 2rem;
        background-color: #58e783;
        border: 0;
        padding: .8rem 6rem;
        color: #fff;
        font-size: 1.2rem;
        text-transform: uppercase;
    }
`

export const Modal = styled(motion.div)`
    padding: 2rem;
    background-color: #eee;
`