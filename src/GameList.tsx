import styled from "styled-components";
import { Link } from "react-router-dom";
import Image from "./img/main.webp";


const Center = styled.div`
   margin-top: 200px;
`

const StyledButton = styled.button`
  background-color: #228be6;
  color: #ffffff;
  border: none;
  border-radius: 20px;
  padding: 15px;
  width: 50%;
  margin: 20px auto;
  font-size: 17px;
  cursor: pointer;
  
`;
const Title = styled.h1`
  text-align: center;
  margin-top: 90px;
`
const Wrap = styled.main`
  flex-direction: column;
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  margin: auto;
  width: 100vw;
  height: 100%;
  min-height: 600px;
  max-width: 460px;
  max-height: 896px;
  background-color: #F0EBE1;
`;



const GameList = () => {
   return (
     <Wrap>
        <Title>게임 선택 하기</Title>
      <Center>
    <Link to={"/gugudan"}><StyledButton>구구단</StyledButton></Link>
    <Link to={"/relay"}><StyledButton>끝말잇기</StyledButton></Link>
    <Link to={"/baseball"}><StyledButton>숫자야구</StyledButton></Link> 
    <Link to={"/response"}><StyledButton>반응속도체크</StyledButton></Link> 
    <Link to={"/rsp"}><StyledButton>가위바위보</StyledButton></Link> 
    <Link to={"/lotto"}><StyledButton>로또뽑기</StyledButton></Link> 
      </Center>
    </Wrap>
   )

};

export default GameList;