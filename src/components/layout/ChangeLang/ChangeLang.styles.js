import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  width: 250px;
  height: 150px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h3`
  text-align: center;
  margin-bottom: 16px;
  color: #555;
`;

export const BtnsWrapper = styled.div`
  margin: 0 auto;
  width: 180px;
  display: flex;
  justify-content: space-around;
`;