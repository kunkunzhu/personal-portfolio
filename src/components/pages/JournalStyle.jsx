import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


export const Header = styled.header`
    display: flex;
    text-align: left;
    flex-direction: row;
    padding: 5rem;
    margin-bottom: 5rem;
    font-weight: 1200;
    font-size: 85px;
    justify-content: space-between;
    .text {
        .precursor {
            color: #FFFDFA;
            font-family: var(--accent-font);
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: var(--txt-clr);
        }
        position: relative;
        left: -200px;
    }
    @media (max-width: 1200px) {
        font-weight: normal;
        font-size: 60px;
        flex-direction: column;
        position: relative;
        left: 0;
        top: -150px;
    }
`
export const Type = styled.div`
    font-weight: 1200;
    font-size: 85px;
    color: var(--txt-clr);
    @media (max-width: 1200px) {
        font-size: 60px;
    }
    & span {
        font-family: var(--accent-font);
    }
`

export const Masonry = styled.div`
    column-count: 3;
    column-gap: 1rem;
    row-gap: 1rem;
    padding: 0;
    margin-left: 2.5rem;
    margin-right: 2.5rem;
`
// add responsive to masonry