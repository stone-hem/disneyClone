import React from 'react'
import styledComponents from 'styled-components'

function Viewer() {
  return (
    <Container>
        <Wrap>
            <img src='/images/viewers-disney.png' alt='one'/>
        </Wrap>
        <Wrap>
            <img src='/images/viewers-marvel.png' alt='two'/>
        </Wrap>
        <Wrap>
            <img src='/images/viewers-national.png' alt='three'/>
        </Wrap>
        <Wrap>
            <img src='/images/viewers-pixar.png' alt='four'/>
        </Wrap>
        <Wrap>
            <img src='/images/viewers-starwars.png' alt='five'/>
        </Wrap>
    </Container>
  )
}

export default Viewer

const Container=styledComponents.div`
margin-top:30px;
display:grid;
padding:36px 0 26px;
grid-gap:25px;
grid-template-columns:repeat(5,minmax(0,1fr));
`

const Wrap=styledComponents.div`
border-radius:10px;
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
    box-shadow:11px 6px 6px #040714;
    transform:scale(1.05);
    border-color:rgba(249,249,249,0.8);
}
`