import styled from '@emotion/styled';
import { accentColor, cubicBezier, borderColor, boxShadow } from './colors';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)``;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  width: 170px;
  padding: 15px;
  border-radius: 8px;
  margin: 0 auto;
  text-decoration: none;
  color: black;
  font-weight: bold;
  transition: color 250ms ${cubicBezier};
  transition: background-color 250ms ${cubicBezier};
  background-color: ${accentColor};
  box-shadow: ${boxShadow};

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${accentColor};
    background-color: ${borderColor};
  }
`;
