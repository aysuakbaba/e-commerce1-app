import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import MainNavigation from "./MainNavigation";



const divStyle = {
  display: "flex",
  justifyContent: "flex-start",
  backgroundSize: "cover",
  height: "100vh",
  maxHeight: "1024px"
  
};


const proprietes = {
    duration: 500,
    autoplay: true,
    transitionDuration: 500,
    arrows: false,
    infinite: true,
    easing: "ease"
}
const fadeImages = [
  {
    url: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2018%2F08%2Fcos-mid-season-campaign-8.jpg?q=90&w=1755&cbr=1&fit=max"
    
  },
  {
    url: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2018%2F08%2Fcos-mid-season-campaign-11.jpg?q=90&w=1755&cbr=1&fit=max"
  },
  {
    url: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2018%2F08%2Fcos-mid-season-campaign-7.jpg?q=90&w=1755&cbr=1&fit=max"
    
  }
  
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      
      <Fade {...proprietes}>
        
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${fadeImage.url})` }}
            >
              <MainNavigation />
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Slideshow;
