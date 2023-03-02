import React from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";


const Info = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left:0;
background-color: rgba(0,0,0,0.2);
z-index: 3;
display: flex;
justify-content: center;
align-items: center;
opacity: 0;
transition: all ease 0.5s;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-height: 280px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5fbfd;
  position: relative;
  cursor: pointer;

  &:hover ${Info}{
    opacity: 1;
  }
`;
const Circle = styled.div`
  background-color: white;
  border-radius: 50%;
  height: 200px;
  width: 200px;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
 
  z-index: 2;
`;

const Icons = styled.div`
width:40px;
height:40px;
background-color: white;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
margin: 10px;
cursor: pointer;
transition: all 0.5s ease;

&:hover {
  background-color: #e9f5f5;
  transform: scale(1.1);
}
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icons>
          <ShoppingCartOutlinedIcon />
        </Icons>
        <Icons>
          <SearchOutlinedIcon />
        </Icons>
        <Icons>
          <FavoriteBorderOutlinedIcon />
        </Icons>
      </Info>
    </Container>
  );
};

export default Product;
