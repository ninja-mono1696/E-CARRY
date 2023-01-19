import React from "react";
import  { Component } from "react";
import Slider from "react-slick";



export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: true,
    
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div style={{width:'50%' ,margin:'auto'}}>
        <h2>Previous and Next methods</h2>
        <div style={{ textAlign: "center"}}>
          <button style={{marginTop:'200px' ,position:'fixed',left:'10%'}} className="button" onClick={this.previous}>
          {"<"}
          </button>
          <button style={{marginTop:'200px',position:'fixed',right:'10%'}} className="button" onClick={this.next}>
          {">"}
          </button>
        </div>
        <Slider ref={c => (this.slider = c)} {...settings}>
       
          <div key={1}>
           <img width="100%" src='https://images.dailyobjects.com/marche/product-images/1801/black-orange-two-tone-silicone-apple-watchband-38-40-41mm-images/Black-Orange-Two-Tone-Silicone-Apple-WatchBand-VW.png?tr=cm-pad_resize,v-2,w-759,h-648,dpr-1' />
          </div>
          <div key={2}>
            <h3>2</h3>
          </div>
          <div key={3}>
            <h3>3</h3>
          </div>
          <div key={4}>
            <h3>4</h3>
          </div>
          <div key={5}>
            <h3>5</h3>
          </div>
         
        </Slider>
        
      </div>
    );
  }
}
  


  