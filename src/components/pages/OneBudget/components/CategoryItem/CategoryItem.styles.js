import styled from 'styled-components';

export const Root = styled.button`
  display: flex;
  width: 100%;
  border: none;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-size: 15px;
  cursor: pointer;
  background-color: #fff;
  border-radius: 0;
  transition: all .2s;

  &.title {
    background-color: #555;
    color: #fff;
    font-weight: bold;
  }

  &.main {
    background-color: #999;
    color: #fff;
  }

  &:hover, &:active, &:focus {
    outline: none;
    background-color: #000;
    color: #fff;
  }
`;


export const CatName = styled.span`
  margin-right: 10px; 
`;

export const CatValue = styled.span`
  font-weight: bold;
`;