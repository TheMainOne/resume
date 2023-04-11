import styled from 'styled-components';

import { footerColor} from "../../utils/colors"


export const FooterStyles = styled.footer`
padding: 30px;
background-color: ${footerColor};
font-weight: 500;
`

export const Text = styled.p`
  font-size: 14px;
`

export const LinkText = styled.a`
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }

`
