import styled, { createGlobalStyle } from "styled-components";

interface GlobalStyleProps {
  color: string;
}
export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  html, body {
    height: 100%;
    width: 100%;
    overflow: hidden; 
    background-color: ${({ color }) => color}; 
  }
`;

export const QuoteBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  background-color: white;
  min-width: 550px;
  min-height: 253px;
  width: auto;
  height: auto;
`;

export const Text = styled.div`
  font-family: ${({ theme }) => theme.fonts.newAmsterdam};
  font-size: 30px;
  word-wrap: break-word;
`;

export const Author = styled.div`
  font-family: ${({ theme }) => theme.fonts.tertiary};
  position: relative;
  font-size: 20px;
  display: flex;
  justify-content: flex-end;
  margin-right: 100px;
  width: 100%;
  padding-right: 200px;
  padding-top: 50px;
`;

export const FullButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  padding-top: 220px;
  height: auto;
  width: auto;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.green};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
`;
