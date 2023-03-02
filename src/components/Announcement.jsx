import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  text-transform: capitalize;
  text-align: center;
  letter-spacing: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Super Deal! free shipping on orders over gh50</Container>;
};

export default Announcement;
