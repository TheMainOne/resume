
import styled from '@emotion/styled'
import {primaryColor,  secondaryColor} from "../../utils/colors"

export const Title = styled.h3` 
 font-size: 26px;
 font-weight: bold;
 margin-bottom: 15px;
 color: ${primaryColor};
`
export const TechText = styled.span`
  display: block;
  color: ${secondaryColor};
`;

export const TechFlex = styled.ul`
display: flex;
justify-content: center;
flex-wrap: wrap;
align-items: center;
`

export const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
`;

export const Item = styled.li`
  padding: 20px;
  font-size: 16px;
  line-height: 1.71;
`;
