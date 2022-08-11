import styled from "styled-components";
import { motion } from "framer-motion"

export const Container = styled(motion.nav)`
    display: flex;
    justify-content: space-between;
    padding: 1.7rem 0;
    margin-bottom: 2rem;
    

    &>* {
        flex: 1;
        display: flex;
    }

    ul {
        display: flex;
        gap: 2rem;
        justify-content: flex-start;

        li {
            list-style-type: none;
            text-transform: uppercase;
            font-size: 1.1rem;
            cursor: pointer;

            &:hover {
                color: #58e783;
            }
        }
    }

    .logo {
        justify-content: center;
    }

    .shopping {
        justify-content: flex-end;
        gap: 1rem;
        align-items: center;
    }
`


export const CartDiv = styled(motion.div)`
    cursor: pointer;
    position: relative;

    &> p {
        width: 10px;
        height: 10px;
        position: absolute;
        top: -10px;
        right: -15px;
        border-radius: 50%;
        background-color: #111;
        color: #fff;
        z-index: 1;
        padding: .5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: .8rem;
    }
`