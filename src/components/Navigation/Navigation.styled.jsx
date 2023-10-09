import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 600;
  font-size: 20px;

  &.active {
    color: #e98a17;
    text-decoration: underline;
  }

  &.last-child {
    border: 1px solid #e98a17;
  }
`;
