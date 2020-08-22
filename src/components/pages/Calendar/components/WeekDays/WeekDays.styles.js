import styled from 'styled-components';

export const Root = styled.ul`
  list-style: none;
  display: flex;

  li {
    font-size: 16px;
    font-weight: bold;
    color: #555;
    text-align: center;
    flex: 1;

    &:not(:last-child) {
      border-right: 1px solid #999;
    }

    @media (max-width: 380px) {
      font-size: 14px;
    }
  }
`;