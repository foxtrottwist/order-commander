import styled from 'styled-components';

export const Button = styled.button`
  height: 2rem;
  width: 6rem;
  background-color: #fff;
  border: 0.1rem solid ${props => props.color};
  border-radius: 1rem;
  cursor: pointer;
  color: ${props => props.color};
  font-size: 1.5rem;
  font-weight: 300;
  text-align: center;
  text-decoration: none;
  display: inline-block;
`;

export const InnerListBox = styled.div`
  width: 16rem;
  height: 30rem;
  text-align: center;
  overflow: auto;
`;

export const FormBox = styled.div`
  display: flex;
  margin-top: 3rem;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 20rem;
    width: 20rem;
    padding: 1%;
  }
  select {
    display: block;
    height: 1.5rem;
    width: 18rem;
    border: 0.001rem solid #000;
  }
  input {
    display: block;
    height: 1.5rem;
    width: 18rem;
    border: 0.001rem solid #000;
  }
  label {
    font-size: 1.2rem;
  }
`;

export const FieldBox = styled.div`
  height: 7rem;
  margin: 0 auto;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Error = styled.div`
  color: #b60009;
  max-width: 18rem;
`;
