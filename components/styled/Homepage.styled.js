import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.section)`

`

export const Content = styled(motion.div)`

    h1 {
        margin-bottom: 3rem;
        text-transform: capitalize;
    }
`

export const ProductGrid = styled(motion.div)`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 3rem;
`