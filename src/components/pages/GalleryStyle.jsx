import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--bg-clr);
`
export const colorAnimation = keyframes`
    0% { -webkit-text-stroke-color #EF9A9D; }
    25% { -webkit-text-stroke-color #EAB771; }
    50% { -webkit-text-stroke-color #BCDF62; }
    75% { -webkit-text-stroke-color #62DFD9; }
    100% { -webkit-text-stroke-color: #9666DB; } 
`

export const Header = styled.div`
    width: 75vw;
    display: flex;
    flex-direction: column;
    padding: 100px;
    margin-top: 200px;
    & caption {
        padding-left: 25px;
        opacity: 0;
        letter-spacing: 0.2rem;
        height: 250px;
        text-align: left;
        font-size: 0.8rem;
        color: var(--txt-clr);
        z-index: 1;
        &:hover {
            opacity: .8;
            transition: 0.5s ease-in;
        }
    }
    & header {
        line-height: 0.75;
        font-size: 100px;
        font-weight: 600;
        letter-spacing: 0.02rem;
        color: #FFFDFA;
        -webkit-text-stroke-width: 1.25px;
        -webkit-text-stroke-color: var(--txt-clr);
        animation-name: ${colorAnimation};
        animation-duration: 10s;
        animation-iteration-count: infinite; 
        z-index: 2;
    }
`