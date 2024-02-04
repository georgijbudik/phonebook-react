import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 16px;
  height: 60px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  background-color: white;

  @media screen and (min-width: 768px) {
    padding: 16px 40px;
  }
  @media screen and (min-width: 1440px) {
    padding: 24px 72px;
    height: 75px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
