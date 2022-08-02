import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    padding: 1rem;
    justify-self: center;
    position: relative;

    &:hover {
        box-shadow: 0 4px 35px #a8acb030;
        transition: all .2s ease;
    }

    &:hover button {
        display: block;
    }

    figure {
        width: 356px;
        max-height: 338px;
        margin-bottom: 1rem;
        overflow: hidden;
        border: 1px solid rgba(128, 128, 128, 0.134);
    }

    img {
        width: 100%;
        height: auto;
        /* object-fit: contain; */
        object-position: bottom;
        /* height: 100%; */
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
    }
`