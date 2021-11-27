import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #9c88ff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  padding: 5px;
`;
function Announcement() {
  return (
    <Container>Super Deal! Free shipping on all orders over ₹500</Container>
  );
}

export default Announcement;
