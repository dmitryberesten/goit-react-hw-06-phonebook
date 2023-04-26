import styled from 'styled-components';

export const List = styled.ul`
  padding-left: 30px;
`;

export const Item = styled.li`
  padding-left: 5px;
  font-size: 17px;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Text = styled.p`
  display: inline-block;
  min-width: 230px;
`;

export const Button = styled.button`
  width: 70px;
  padding-top: 3px;
  padding-bottom: 3px;
  margin-left: 10px;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  cursor: pointer;
  background-color: transparent;
  transition: background-color 0.5s ease;

  &:hover,
  &:focus {
    background-color: #c4c4c4;
  }
`;
