import React from 'react' 
import './style.css' 
import ArrowIcons from '../../../img/icons/arrow.svg' 
import Slider from "react-slick"; 
   
// Next arrow
function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", backgroundImage: "url("+ArrowIcons+")",backgroundSize: "100% 100%" }}
        onClick={onClick}
      />
    );
}

// Next arrow
function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        style={{ ...style, display: "block", backgroundImage: "url("+ArrowIcons+")",backgroundSize: "100% 100%" }}
        onClick={onClick}
        />
    );
} 

function TheSlider(props) {
    const settings = {
        dots: props.dots,
        infinite: props.loop,
        speed: props.speed,
        slidesToShow: props.slideShow,
        slidesToScroll: props.SlideScroll,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        arrows: props.arrows
    };

    return (
        <Slider {...settings}> 
            { props.children }
        </Slider>
    )
}


export default  TheSlider;