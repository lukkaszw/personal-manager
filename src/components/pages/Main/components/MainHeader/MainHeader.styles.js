import styled from 'styled-components';

export const Root = styled.header`
  margin: 20px 0;
  text-align: center;
`;

export const Title = styled.h1`
  margin: 0 auto 40px auto;
  padding: 6px 0;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 2px;
  font-size: 22px;
  width: 80%;
  transform: skew(-30deg);
  background-image: linear-gradient(to right, #f2e86d, #c9b346, #755c11, 	#232803);
  transition: 1s;

  span {
    display: inline-block;
    color: #fff;
    transform: skew(30deg);
    text-shadow: -4px 2px 3px #555;
  }

  @media (max-width: 600px) {
    font-size: 18px;
    padding: 5px 0;
    width: 95%;
  }
`;

export const Image = styled.img`
  width: 30%;
  min-width: 180px;
`;

export const ButtonWrapper = styled.div`
  margin: 20px 0;
  text-align: center;
`;