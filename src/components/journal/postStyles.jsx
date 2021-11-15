import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    img {
        width: 55%;
        padding-bottom: 2rem;
        align-content: flex-end;
    }
    .info {
        margin: 2rem;
        letter-spacing: 0.5rem;
        h1 {
            font-weight: 1200;
            line-height: 3rem;
            font-size: 3.5rem;
            color: white;
            margin-top: 25%;
            margin-bottom: 2.5rem;
            font-family: var(--txt-font);
            -webkit-text-stroke-width: 0.001px;
            -webkit-text-stroke-color: var(--txt-clr);
        }
        .date {
            font-size: 1rem;
            opacity: 0.7;
        }
        small {
            position: relative;
            top: 6rem;
            left: 4rem;
            letter-spacing: 0.02rem;
            color: var(--rain);
            a {
                color: inherit;
                text-decoration: none;
                &:hover {
                    text-decoration: underline;
                    text-decoration-style: wavy;
                    text-decoration-color: var(--blush);
                }
            }
        }
    }
`

export const Wrapper = styled.div`
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    color: var(--txt-clr);
`

export const Body = styled.div`
    letter-spacing: 0.02rem;
    max-width: 750px;
    text-align: left;
    margin: 2rem auto 0 auto;
    line-height: 130%;
    img {
        margin-top: 3rem;
        max-width: 100%;
        margin-left: 40%;
    }
    hr {
        border-top: 3px dotted var(--font-clr);
        opacity: 0.5;
        width: 80%;
        margin-top: 0.5rem;
        margin-bottom: 1.5rem;
    }
    .paragraph {
        padding-bottom: 1rem;
        i {
            letter-spacing: 0.04rem;
        }
    }
    .poem {
        margin-left: 60%;
        letter-spacing: 0.1rem;
        .verse {
            margin-bottom: 1.5rem;
        }
    }
    .italicize {
        padding-left: 0.5rem;
        font-style: italic;
        padding-bottom: 1rem;
        letter-spacing: 0.05rem;
    }
`

/* Footer Nav Bar */
const BarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .link {
        color: var(--txt-clr);
        text-decoration: none;
        font-style: italic;
        padding: 4rem 4rem 2rem 4rem;
        color: var(--blush);
        font-family: var(--txt-font);
        .path {
            font-size: 1.5rem;
            font-family: inherit;
            padding-bottom: 0.5rem;
        }
        .title {
            font-family: inherit;
            color: var(--txt-clr);
            margin-left: 1.5rem;
            font-size: 1rem;
            opacity: 0;
        }
        &:hover {
            .path {
                text-decoration: underline;
                text-decoration-style: wavy;
                text-decoration-color: var(--rain);
            }
            .title {
                transition: 0.3s ease-in;
                opacity: 0.8;
            }
        }
    }
`

export class FooterBar extends React.Component {
    render() {
        return (
            <BarWrapper>
                <Link className="link" to='/journal'>
                    <div className="path">posts</div>
                </Link>
                {this.props.previous ? 
                    <Link className="link" to={this.props.previous.path}>
                        <div className="path">previous.</div>
                        <div className="title">
                            {this.props.previous.title}
                        </div>
                    </Link>
                    : null
                }
                {this.props.next ? 
                    <Link className="link" to={this.props.next.path}>
                        <div className="path">next.</div>
                        <div className="title">
                            {this.props.next.title}
                        </div>
                    </Link>
                    : null
                }
            </BarWrapper>
        )
    }
}