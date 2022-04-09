import React from 'react'
import styledComponents from 'styled-components'

function Movies() {
  return (
    <Container>
        <h4>Recommended for you</h4>
        <Content>
            <Wrap>
                <img src='/images/login.jpg' alt=""/>
            </Wrap>
            <Wrap>
                <img src='/images/login.jpg' alt=""/>
            </Wrap>
            <Wrap>
                <img src='/images/login.jpg' alt=""/>
            </Wrap>
            <Wrap>
                <img src='/images/login.jpg' alt=""/>
            </Wrap>
            <Wrap>
                <img src='/images/login.jpg' alt=""/>
            </Wrap>
            <Wrap>
                <img src='/images/login.jpg' alt=""/>
            </Wrap>

        </Content>
    </Container>
  )
}

export default Movies

const Container=styledComponents.div`

`

const Content=styledComponents.div`
display:grid;
grid-gap:25px;
grid-template-columns:repeat(4, minmax(0,1fr));
`

const Wrap=styledComponents.div`
border-radius:10px;
overflow:hidden;
cursor:pointer;
border:3px solid rgba(249,249,249,0.1);
box-shadow:10px 5px 5px #040714;
transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94)0s;

img{
    width:100%;
    height:100%;
    object-fit:cover;
}
&:hover{
    transform:scale(1.05);
    border-color:rgba(249,249,249,0.8);
    box-shadow:11px 6px 6px #040714;
}

`