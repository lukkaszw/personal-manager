import styled from 'styled-components';

const FormFieldRow = styled.div`
  margin-bottom: ${props => props.bigMargin ? '40px' : '20px'};
  display: ${props => props.inlineGroup ? 'flex' : 'block'};
  flex: wrap;

  & > * {
    margin-right: ${props => props.inlineGroup ? '20px' : '0'};
  }

  @media (max-width: 640px) {
    margin-bottom: ${props => props.bigMargin ? '30px' : '8px'};
  }
`;

export default FormFieldRow;
