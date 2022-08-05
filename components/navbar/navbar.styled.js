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
                color: #05cb05;
            }
        }
    }

    .logo {
        justify-content: center;
    }

    .shopping {
        justify-content: flex-end;
    }
`