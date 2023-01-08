import styled from "styled-components";
import { Link } from "react-router-dom";
import Image from "./img/main.webp";

const StyledButton = styled.button`
  background-color: #228be6;
  color: #ffffff;
  border: none;
  border-radius: 20px;
  padding: 12px 24px;
  margin: 10px;
  cursor: pointer;
`;
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
const ImgWrap = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    box-sizing: border-box;
    padding: 0;
    border: none;
    margin: auto;
    display: block;
    width: 0;
    height: 0;
     min-width: 100%;
    max-width: 100%;
    min-height: 70%;
    max-height: 50%; 
`;
const Foot = styled.div`
  position: absolute;
  padding: 20px 24px 0;
  width: 90%;
  height: 25vw;
  bottom: 10px;
  background-color: #F0EBE1;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
    `;
const Button = styled.button`

cursor: pointer;
    display: inline-flex;
    appearance: none;
    align-items: center;
    justify-content: center;
    user-select: none;
    position: relative;
    white-space: nowrap;
    vertical-align: middle;
    outline: 2px solid transparent;
    outline-offset: 2px;
    line-height: 1.2;
    border-radius: 12px;
    height: 48px;
    font-size: 18px;
    border: 1px solid;
    border-color: rgba(0,0,0, 0.3);
    color: #00000075;
    width: 100%;
    font-family: 'Gamja Flower';
    background-color: #F0EBE1;
    top: 70%;
`;
const GameList = () => {
   return (
     <Wrap>
      <Foot/>
    <Link to={"/gugudan"}><StyledButton>구구단</StyledButton></Link>
    <Link to={"/relay"}><StyledButton>끝말잇기</StyledButton></Link>
    <Link to={"/baseball"}><StyledButton>숫자야구</StyledButton></Link> 
    <Link to={"/response"}><StyledButton>반응속도체크</StyledButton></Link> 
    <Link to={"/rsp"}><StyledButton>가위바위보</StyledButton></Link> 
    <Link to={"/lotto"}><StyledButton>로또뽑기</StyledButton></Link> 
    </Wrap>
   )

};

export default GameList;