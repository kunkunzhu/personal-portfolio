import styled from 'styled-components'

export const Masonry = styled.div`
    display: grid;
    margin-right: auto;
    margin-left: auto;
    box-pack: start;
    -webkit-box-pack: start;
    grid-template-columns: 1fr 1fr;
    column-count: 2;
    grid-column-gap: 1.5rem;
    grid-row-gap: 3rem;
    padding: 0;
    @media (max-width: 900px) {
        column-count: 1;
    }
`