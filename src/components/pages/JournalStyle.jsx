import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
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
    button {
        cursor: crosshair;
        margin-top: 1rem;
        flex: 0 0 auto;
        align-self: flex-start;
        border-radius: 20px;
        border: 1px solid var(--blush);
        padding: 0.5rem;
        text-decoration: none;
        padding-left: 1rem;
        padding-right: 1rem;
        background: inherit;
        color: var(--blush);
        text-decoration: none;
        font-size: 1.1rem;
        &:hover {
            color: white;
            background: var(--blush);
            transition: 0.1s ease-out; 
        }
    }
    @media (max-width: 1200px) {
        font-weight: normal;
        font-size: 60px;
        flex-direction: column;
        position: relative;
        left: 150px;
        top: -50px;
        button {
            position: relative;
            left: -200px;
            margin-top: 50px;
            margin-bottom: -120px;
            transition: 0.4s ease-out; 
        }
    }
    @media (max-width: 610px)  {
        .text {
            .precursor {
                font-size: 40px;
            }
        }
    } 
`
export const Type = styled.div`
    font-weight: 1200;
    font-size: 85px;
    color: var(--txt-clr);
    & span {
        font-family: var(--accent-font);
    }
    @media (max-width: 1200px) {
        font-size: 60px;
    }
    @media (max-width: 610px)  {
        font-size: 40px;
    } 
`

export const Masonry = styled.div`
    column-count: 3;
    column-gap: 1rem;
    row-gap: 1rem;
    padding: 0;
    margin-left: 2.5rem;
    margin-right: 2.5rem;
    @media (max-width: 768px) {
        column-count: 2;
    }
    @media (max-width: 600px) {
        column-count: 1;
    }
`
export const List = styled.div``