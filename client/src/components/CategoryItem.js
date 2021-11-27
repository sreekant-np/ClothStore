import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 80vh;
  position: relative;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  border: none;
  padding: 15px;
  cursor: pointer;
  background: white;
  font-weight: 600;
  &:hover {
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
  }
`;
const Title = styled.h1`
  color: white;
  margin: 20px;
`;
function CategoryItem({ item }) {
  return (
    <div>
      <Container>
        <Link to={`/products/${item.cat}`}>
          <Image src={item.img} />
          <Info>
            <Title>{item.title}</Title>
            <Button>Shop Now</Button>
          </Info>
        </Link>
      </Container>
    </div>
  );
}

export default CategoryItem;
