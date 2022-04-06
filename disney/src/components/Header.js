import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Navigation>
            <Logo src="/images/logo.svg" />
            <Menu>
                <a>
                    <img src='/images/home-icon.svg' />
                    <span>Home</span>
                </a>
                <a>
                    <img src='/images/search-icon.svg' />
                    <span>Search</span>
                </a>
                <a>
                    <img src='/images/watchlist-icon.svg' />
                    <span>watch list</span>
                </a>
                <a>
                    <img src='/images/original-icon.svg' />
                    <span>originals</span>
                </a>
                <a>
                    <img src='/images/movie-icon.svg' />
                    <span>movies</span>
                </a>
                <a>
                    <img src='/images/series-icon.svg' />
                    <span>serie</span>
                </a>
            </Menu>
            <User src='/images/laravel.jpg' />
        </Navigation>
    )
}

export default Header

const Navigation = styled.nav`
height:70px;
background:#090b13;
display:flex;
align-items:center;
padding:0 36px;
overflow-x:hidden;

`
const Logo = styled.img`
width:80px;

`

const Menu = styled.div`
display:flex;
flex:1;
margin-left:20px;

a{
    cursor:pointer;
    display:flex;
    align-items:center;
    padding:0 12px;
    img{
        height:20px;
    }
    span{
        font-size:12px;
        letter-spacing:1.4px;
        position:relative;
        &:after{
            content:"";
            height:2px;
            background:white;
            position:absolute;
            left:0;
            right:0;
            bottom:-6px;//push down below the span component
            opacity:0;
            transform-origin:left center;
            transition:all 450ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
            transform:scaleX(0); //scale the line in x axis
        }
    }
    &:hover{
        span:after{
            transform:scale(1);
            opacity:1;
        }
    }
}
`

const User = styled.img`
height:30px;
width:30px;
border-radius:100%;
cursor:pointer;
`