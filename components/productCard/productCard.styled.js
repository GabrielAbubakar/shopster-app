import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    padding: 1rem;
    justify-self: center;
    position: relative;

    .inStock {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        font-size: 2.3rem;
        font-weight: 700;
        text-transform: uppercase;
        color: #888;
        background-color: #a8acb020;
        z-index: 10;
    }

    &:hover {
        box-shadow: 0 4px 35px #a8acb060;
        transition: all .2s ease;
        cursor: pointer;
    }

    &:hover button {
        display: block;
    }

    figure {
        /* width: 356px;
        max-height: 338px; */
        margin-bottom: 1rem;
        overflow: hidden;
        border: 1px solid rgba(128, 128, 128, 0.134);
    }

    img {
        width: 100%;
        height: auto;
        object-position: top;
        object-fit: contain;
    }

    h3 {
        color: rgba(29, 31, 34, 1);
        font-size: 1.2125rem;
        margin-bottom: .5rem;
    }

    button {
        background-color: transparent;
        border: none;
        position: absolute;
        top: 75%;
        right: 5%;
        cursor: pointer;
        display: none;
        transition: all .4s ease;

        &:hover {
            transform: scale(1.1);
        }
    }
`