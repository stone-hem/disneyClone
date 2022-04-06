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
            <img src='/images/slider-badag.jpg' />
        </Wrap>
        <Wrap>
            <img src='/images/slider-badging.jpg' />
        </Wrap>
    </Slide>
  )
}

export default Slider

const Slide=styledComponents(slider)`
margin-top:20px;
padding:20px;
.slick-list{
    overflow:visible;
}

`

const Wrap=styledComponents.div`
img{
    width:100%;
    height:100%;
    border-radius:3%;
    box-shadow:10px 5px 5px #040714;
    // box-shadow:rgb(0,0,0 / 69%) 0px 26px 30px -10px, rgb(0,0,0 /73%) 0px 16px 10px -10px;
}

`