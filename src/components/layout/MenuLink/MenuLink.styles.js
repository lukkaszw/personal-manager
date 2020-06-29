import styled from 'styled-components';

export const Li = styled.li`
  display: inline-block;
  height: 30px;

  & > a {
    display: inline-block;
    padding: 0 10px;
    height: 100%;
    color: #fff;
    font-family: inherit;
    font-weight: 500;
    font-size: 12px;
    text-decoration: none;
    line-height: 30px;
    transition: .2s;
  }

  &:hover > a, & > a.active {
    background-color: #5f73d8;
  }
`;

