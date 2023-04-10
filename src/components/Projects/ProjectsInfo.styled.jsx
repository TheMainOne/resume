import styled from 'styled-components';
import {boxShadow, accentColor, secondaryColor, cubicBezier, primaryColor, lightGreyColor} from "../../utils/colors"

export const Title = styled.h3`
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 28px;
  text-transform: uppercase;
  background-color: ${primaryColor};
  color: #fff;
`;

export const Subtitle = styled.p`
  margin: 20px 0;
  font-size: 20px;
  color: ${secondaryColor};
`;

export const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 50px;
`;

export const Link = styled.a`
padding: 5px;
transition: color 250ms ${cubicBezier};
cursor: pointer;
color: #212121;

  &:hover,  &:focus  {
      color: ${accentColor};
  }
`

export const Item = styled.li`
  max-width: 500px;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
 
  @media (min-width: 1020px) {
    width: calc((100% - 2 * 30px) / 2);
    margin: 15px;
  }

`;

export const Image = styled.img`
width: 500px;
height: 250px;
object-fit: cover;
`
export const Box = styled.div`
  overflow: hidden;
  box-shadow: ${boxShadow};
  border-radius: 4px;
`

export const Tech = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const TechItem = styled.li`
  margin-bottom: 10px;
  font-weight: bold;
  padding: 5px;
  box-shadow: ${boxShadow};
  background-color: ${lightGreyColor};
  border-radius: 8px;
  color: ${primaryColor} ;
  opacity: 80%;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;