import styled from 'styled-components'

export const Wrapper = styled.div`
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    height: 100vh;
    background-color: var(--bg-clr);
`

export const Header = styled.header`
    display: flex;
    text-align: left;
    flex-direction: column;
    position: relative;
    left: -400px;
    top: -100px;
    font-weight: 1200;
    font-size: 85px;
    .precursor {
        color: #FFFDFA;
        font-family: var(--txt-font);
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: var(--txt-clr);
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
        font-family: var(--txt-font);
    }
`