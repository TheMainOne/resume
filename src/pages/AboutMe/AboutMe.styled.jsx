import styled from '@emotion/styled'
import { greyTextColor, boxShadow} from "../../utils/colors"

export const Box = styled.div` 
display: flex;
justify-content: space-evenly;
align-items: center;
margin: 50px 0;

 @media (max-width: 860px) {
    flex-direction: column;
    text-align: center;

    margin: 20px 0;
    padding: 20px 30px;
  }
`

export const LeftBox = styled.div` 
box-shadow: ${boxShadow};
border-radius: 6px;
overflow: hidden;
max-width: 500px;
margin-bottom: 50px;

@media (min-width: 860px) {
    margin-bottom: 0;
}
`

export const RightBox = styled.div`
max-width: 500px;
`
export const TextBox = styled.div` `


export const TitleText = styled.h3`
 font-size: 26px;
 font-weight: bold;
 margin-bottom: 15px;
 color: ${greyTextColor};
 text-align: center; 

@media (min-width: 860px) { 
  text-align: start;
 }
 `

export const Text = styled.p` 
text-align: center;
margin-bottom: 10px;

font-size: 18px;
color: ${greyTextColor};

&:first-child {
  margin-top: 20px;
}

&:last-child {
  margin-bottom: 50px;
}

@media (mix-width: 480px) {
  font-size: 19px;
 }

 @media (min-width: 860px) { 
  text-align: start;
 }

`




