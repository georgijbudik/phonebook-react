import styled from '@emotion/styled';

export const Form = styled.form`
  width: 350px;
  height: 170 px;
  padding: 8px;
  outline: 1px solid black;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 6px;
`;

export const Input = styled.input`
  margin-bottom: 18px;
  padding: 4px 0 4px 6px;
  border: 2px solid #cecece;
  background: #f6f6f6;
  border-radius: 6px;

  :focus {
    outline: none;
    border-color: #2196f3;
  }
`;

export const Button = styled.button`
  font-weight: 600;
  background-color: white;
  outline: none;
  border: 1px solid gray;
  border-radius: 3px;
  padding: 4px;
  cursor: pointer;
`;
