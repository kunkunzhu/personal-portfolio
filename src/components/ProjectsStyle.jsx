import styled from 'styled-components'

export const Masonry = styled.div`
    width: 70vw;
    display: grid;
    margin-right: auto;
    margin-left: auto;
    box-pack: start;
    -webkit-box-pack: start;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1.5rem;
    grid-row-gap: 3rem;
    padding: 0;
    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
    }
`