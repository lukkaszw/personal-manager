import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  width: 250px;
  height: 150px;
  background-color: ${props => props.theme.palette.background.main};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h3`
  text-align: center;
  margin-bottom: 16px;
`;

export const BtnsWrapper = styled.div`
  margin: 0 auto 24px auto;
  width: 180px;
  display: flex;
  justify-content: space-around;
`;