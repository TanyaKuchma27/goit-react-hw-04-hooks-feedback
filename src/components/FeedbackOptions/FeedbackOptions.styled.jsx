import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  margin-right: 15px;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: rgb(211, 165, 241);
  color: rgb(12, 12, 12);
  font-size: 24px;
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #188ce8;
    box-shadow: 0px 4px 4px 0px #00000040;
  }
`;

