import styled from 'styled-components';

export const ButtonsWrapper = styled.div`
  margin: 30px 0 15px 0;
  text-align: ${props => props.center ? 'center' : 'right'};
`;

export const FirstBtn = styled.span`
  margin-right: 5px;
`;

export const SecondBtn = styled.span`
  margin-left: 5px;
`;