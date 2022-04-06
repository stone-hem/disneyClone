import React from 'react'
import slider from 'react-slick/lib/slider';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styledComponents from 'styled-components';

function Slider() {

    let settings={
        dots:true,
        infinite:true,
        speed:550,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true
    }
  return (
    <Slide {...settings}>
        <Wrap>
            <img src='/images/slider-badag.jpg' alt='slider' />
        </Wrap>
        <Wrap>
            <img src='/images/slider-badging.jpg' alt='slider' />
        </Wrap>
    </Slide>
  )
}

export default Slider

const Slide=styledComponents(slider)`
margin-top:5px;
padding: 0px 20px;

ul li button{
    &:before{
        font-size:10px;
        color:white;
    }
}

li.slick-active button::before{
color:blue;
}

.slick-list{
    overflow:visible;
}
 button{
     z-index:1;
 }

`

const Wrap=styledComponents.div`
cursor:pointer;
img{
    border:4px solid transparent;
    border-radius:3%;
    width:100%;
    height:100%;
    box-shadow:10px 5px 5px #040714;

    &:hover{
        border:4px solid rgba(249,249,249,0.8);
    }
}

`