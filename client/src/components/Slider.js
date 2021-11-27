import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { useState } from "react";
import { sliderItems } from "../data";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: transform 0.7s ease-in-out;
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const Image = styled.img`
  height: 80%;
`;
const ImgContainer = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const InfoContainer = styled.div`
  flex: 1;
  text-align: left;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 60px;
  font-weight: bold;
`;
const Desc = styled.p`
  margin: 30px 0;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 15px;
  background-color: transparent;
  cursor: pointer;
`;
function Slider() {
  //clickHandler
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  //initial state
  const [slideIndex, setSlideIndex] = useState(0);
  return (
    <Container>
      {/* left arrow */}
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      {/* wrapper for slides */}
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((items) => (
          <Slide bg={items.bg} key={items.id}>
            <ImgContainer>
              <Image src={items.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{items.title}</Title>
              <Desc>{items.desc}</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      {/* right arrow */}
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
}

export default Slider;
