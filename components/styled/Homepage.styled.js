import styled from "styled-components";
import { motion } from "framer-motion";
import { devices } from "./mediaqueries";

export const Container = styled(motion.section)`


    /* &>*:nth-child(2), &>*:nth-child(3) {

        @media (max-width: 768px) {
            display: none;
        }
    }



    .mobile-view {
        display: none;

        @media (max-width: 768px) {
            display: block;
        }
    } */
`

export const Content = styled(motion.div)`

    h1 {
        margin-bottom: 3rem;
        text-transform: capitalize;

        @media ${devices.tablet} {
            margin-bottom: 5rem;
        }
    }
`

export const ProductGrid = styled(motion.div)`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 3rem;

    @media ${devices.tablet} {
        display: flex;
        flex-direction: column;
        gap: 4rem;
    }

    &>* {

        @media ${devices.tablet} {
            align-self: center;
        }
    }
`