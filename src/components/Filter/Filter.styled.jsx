import styled from '@emotion/styled';

export const Label = styled.label`
  display: block;
  font-weight: 500;
  font-size: 18px;
`;

export const Input = styled.input`
  display: block;
  margin-top: 6px;
  padding: 4px 0 4px 6px;
  border: 2px solid #cecece;
  background: #f6f6f6;
  border-radius: 6px;

  :focus {
    outline: none;
    border-color: #2196f3;
  }
`;
