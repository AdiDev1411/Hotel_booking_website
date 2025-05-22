import { useState, useEffect } from "react";


const buttonStyle = {
  position: "absolute",
  bottom: "40px",
  left: "50px",
  // right:"50%",
  padding: "12px 24px",
  backgroundColor: "rgba(0, 123, 255, 0.8)",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  fontSize: "16px",
  cursor: "pointer",
  zIndex: 2,
};

const slideStyles = {
  position:"relative",
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "absolute",
  top: 0,
  left: 0,
  transition: "opacity 0.8s ease-in-out",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 2,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 2,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
  width: "100%",
  overflow: "hidden",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
  marginTop: "10px",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
  color: "#fff",
};

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
  const interval = setInterval(() => {
    goToNext();
  }, 3000); // 3 seconds
  return () => clearInterval(interval);
}, [currentIndex]);


  return (
    <div style={sliderStyles}>
      {/* <button style={buttonStyle}></button> */}
      {/* Arrows */}
      <div onClick={goToPrevious} style={leftArrowStyles}>❰</div>
      <div onClick={goToNext} style={rightArrowStyles}>❱</div>

      {/* Slides with fade effect */}
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              ...slideStyles,
              backgroundImage: `url(${slide.url})`,
              opacity: index === currentIndex ? 1 : 0,
              zIndex: index === currentIndex ? 1 : 0,
            }}
          >
            {index === currentIndex && (
              <button
                style={buttonStyle}
                onClick={() => console.log(`Clicked on ${slide.title}`)}
              >
                {slide.buttonText || "Explore"}
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Dots */}
      <div style={dotsContainerStyles}>
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            style={{
              ...dotStyle,
              opacity: currentIndex === slideIndex ? 1 : 0.5,
            }}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
