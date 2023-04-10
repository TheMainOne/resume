import styled from 'styled-components';
import { NavLink } from "react-router-dom"
import {primaryColor, accentColor, cubicBezier, borderColor} from "../../utils/colors"


export const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
  padding: 15px;
  border-bottom: 1px solid ${borderColor};

  @media (min-width: 780px) {
    padding: 0 80px;
  }
`

export const ModalBtn = styled.div`
  @media (min-width: 781px) {
    display: none;
  }
`;

export const Navigation = styled.nav`

@media (max-width: 780px) {
    position: absolute;
    top: 100%;
    left: 0;
    width:100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 50px;
    z-index: 100;
    transition: opacity 250ms ${cubicBezier};
    opacity: ${({ menuToggle }) => (menuToggle ? 1 : 0)};
    background-color: #fff;
    text-align: center;
    border-top: 1px solid ${borderColor};
  }

@media (min-width: 780px) {

display: flex; 
gap: 60px; }
`

// export const FlexContainer = styled.div`

// @media (min-width: 780px) {
// max-width: 1170px;
// padding-left: 15px;
// padding-right: 15px;
// display: flex;
// justify-content: space-between;
// align-items: center;
// margin-left: auto;
// margin-right: auto;
// }
// `

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${primaryColor};
  font-weight: bold;
  transition: color 250ms ${cubicBezier};


  &.active {
  color: ${accentColor};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
      color: ${accentColor};
  }
`;

export const Link = styled.a`
`;

export const Image = styled.img`
filter: drop-shadow(0 0 0.6rem ${accentColor});
`;
