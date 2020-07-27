import styled from 'styled-components';

export const Root = styled.div`
  position: absolute;
  bottom: 30px;
  right: 0;
  width: 100px;
  height: 50px;
  background-color: #fff;
  box-shadow: 4px 4px 4px #555;
  border-radius: 5px;
  
  .neutral {
    color: ${props => props.theme.colors.main};
  }

  .negative {
    color: red;
  }
`;