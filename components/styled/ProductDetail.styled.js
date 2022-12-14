import styled from "styled-components";
import { motion } from "framer-motion";
import { devices } from "./mediaqueries";

export const Container = styled(motion.div)`

    .active {
        outline: 10px solid rgba(128, 128, 128, 0.134);
    }

    h1 {
        margin-bottom: 3rem;
    }
`

export const ProductGrid = styled(motion.div)`
    display: grid;
    grid-template-columns: .1fr 1fr .6fr;
    gap: 4rem;



    @media ${devices.tablet} {
        display: flex;
        flex-direction: column;
    }
`

export const ImagesRow = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media ${devices.tablet} {
        flex-direction: row;
        order: 2;
        gap: 1rem;
    }


`

export const ImageBox = styled(motion.figure)`
    outline: 1px solid rgba(128, 128, 128, 0.134);
    border: 1px solid rgba(128, 128, 128, 0.334);
    padding: .2rem;
    transition: all .3s ease;
    cursor: pointer;

    &:hover {
        outline: 10px solid rgba(128, 128, 128, 0.134);
    }

    img {
        width: 100%;
        height: auto;
        object-position: center;
        object-fit: contain;
    }

`


export const ImageShowcase = styled(motion.div)`
    width: 100%;
    height: 500px;
    position: relative;

    @media ${devices.tablet} {
        order: 1;
    }
`

export const ItemDetails = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: #efefef;
    padding: 2rem;
    align-self: flex-start;

    @media ${devices.tablet} {
        order: 3;
        align-self: stretch;
        
    }

    h2 {

    }

    h3 {
        font-weight: 800;
        color: #555;
        font-size: 1.3rem;
    }

    h4 {
        margin-bottom: .7rem;
        text-transform: uppercase;
    }

`

export const CapacityAttr = styled(motion.div)`

`

export const ColorAttr = styled(motion.div)`

`

export const Price = styled(motion.div)`

    p {
        margin-bottom: 1rem;
    }

    button {
        cursor: pointer;
        width: 100%;
        background-color: #58e783;
        border: 0;
        padding: .8rem 1rem;
        color: #fff;
        font-size: 1.2rem;
        text-transform: uppercase;
    }
`

export const Attributes = styled(motion.div)`

    button {
        padding: .3rem .5rem;
        margin-right: .4rem;
    }


    li {
        list-style-type: none;
    }
`