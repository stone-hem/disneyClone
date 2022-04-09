import React from 'react'
import styledComponents from 'styled-components'

function Login() {
  return (
    <Container>
        <Content>
            <LogoOne src="/images/cta-logo-one.svg"/>
            <SignUp>Get all there</SignUp>
            <Desc>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            </Desc>
            <LogoTwo src="/images/cta-logo-two.png"/>
        </Content>
    </Container>
  )
}

export default Login

const Container=styledComponents.div`
position:relative;
height:calc(100vh - 70px);
display:flex;
align-items:top;
justify-content:center;
&: before{
    position:absolute;
    top:0;
    bottom:0;
    content:"";
    left:0;
    right:0;
    background-image:url("/images/login-background.jpg");
    opacity:0.7;
    z-index:-1;
}
`

const Content=styledComponents.div`
margin-top:100px;
max-width:650px;
padding:80px 40px;
width:80%;
display:flex;
flex-direction:column;
align-items:center;

`

const LogoOne=styledComponents.img`

`

const SignUp=styledComponents.a`
width:100%;
background-color:#0063e5;
font-weight:bold;
padding:17px 0;
border-radius:4px;
text-align:center;
font-size:18px;
cursor:pointer;
transition:all 250ms;
letter-spacing:1.5px;
margin-top:8px;
margin-bottom:12px;
&:hover{
    background:#0483ee;
}

`

const Desc=styledComponents.p`
font-size:11px;
letter-spacing:1.5px;
text-align:center;
line-height:1.5;
`

const LogoTwo=styledComponents.img`
width:90%;

`

