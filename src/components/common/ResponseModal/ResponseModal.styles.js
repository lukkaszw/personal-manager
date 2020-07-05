import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: absolute;
  padding: 16px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  min-height: 150px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    font-size: 20px;
  }

  .title.error {
    color: red;
  }

  .message {
    font-size: 16px;
    margin: 16px 0;
    line-height: 1.4;
    text-align: center;
  }
`;