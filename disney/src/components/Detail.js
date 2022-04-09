import React from 'react'
import styledComponents from 'styled-components'

function Detail() {
  return (
    <Container>
      <Back>
        <img src='/images/login.jpg' alt='' />
      </Back>
      <Title>
        <img src='/images/viewers-starwars.png' alt='' />
      </Title>
      <Controls>
        <Play>
          <img src='/images/play-icon-black.png' alt=''/>
          <span>Play</span>
        </Play>
        <Trailer>
        <img src='/images/play-icon-white.png' alt=''/>
          <span>Trailer</span>
        </Trailer>
        <Add>
          <span>+</span>
        </Add>
        <Group>
          <img src='/images/group-icon.png' alt=''/>
        </Group>
      </Controls>
      <SubTitle>
        This is the best movie you can ever watch
      </SubTitle>
      <Desc>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
      </Desc>
    </Container>
  )
}

export default Detail

const Container = styledComponents.div`
min-height:calc(100vh-70px);
padding:0 calc(3.5vw +5px);
position:relative;

`

const Back = styledComponents.div`
position:fixed;
top:0;
left:0;
bottom:0;
right:0;
z-index:-1;
opacity:0.8;
img{
  width:100%;
  height:100%;
  object-fit:cover;
}
`

const Title = styledComponents.div`
height:30vh;
min-height:170px;
width:35vw;
min-width:200px;
margin-top:20px;
img{
  width:100%;
  height:100%;
  object-fit:cover;
}
`

const Controls = styledComponents.div`
display:flex;
align-items:center;

`

const Play = styledComponents.button`
border-radius:4px;
font-size:15px;
display:flex;
align-items:center;
height:50px;
margin-right:22px;
background:rgb(249,249,249);
border:none;
padding:0px 24px;
letter-spacing:1.8px;
cursor:pointer;
&:hover{
  background:rgb(198,198,198);
}
`

const Trailer = styledComponents(Play)`
background:rgba(0,0,0,0.3);
border:1px solid rgb(249,249,249);
color:rgb(249,249,249);

`

const Add = styledComponents.button`
width:44px;
height:44px;
display:flex;
align-items:center;
justify-content:center;
border-radius:50%;
border:2px solid white;
background-color:rgba(0,0,0,0.6);
cursor:pointer;
margin-right:16px;
span{
  font-size:29px;
  color:white;
}


`
const Group = styledComponents(Add)`

background-color:rgb(0,0,0);
`

const SubTitle=styledComponents.div`
color:rgba(249,249,249);
font-size:15px;
margin-top:20px;
min-height:20px;

`

const Desc=styledComponents.div`
color:rgba(249,249,249);
font-size:20px;
margin-top:16px;
min-height:20px;
line-height:1.4;
max-width:600px;

`