import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafcfb;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #fafcfb;
  position: absolute;
`;
const Icon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #fafcfb;
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
  }
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;
function Product({ item }) {
  return (
    <Container>
      <Image src={item.img} />
      <Circle />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
}

export default Product;
