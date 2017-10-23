import styled from 'styled-components';

export const Button = styled.button`
  height: 1.5rem;
  width: 5.2rem;
  background-color: #fff;
  border: none;
  cursor: pointer;
  color: ${props => props.color};
  font-size: 1.5rem;
  font-weight: 300;
  text-align: center;
  text-decoration: none;
  display: inline-block;
`;
