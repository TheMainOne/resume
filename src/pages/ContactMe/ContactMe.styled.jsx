import styled from '@emotion/styled';


export const ContainerWrapper = styled.div`
padding-bottom: 40px;
    padding-top: 40px;

    @media (min-width: 1024px) {
      display: flex;
      justify-content: space-around;
    
    }
  `;

export const ContainerTitle = styled.h3`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 10px;

`;


export const FirstBox = styled.div`

@media (max-width: 1023px) {
  margin-bottom: 30px;
}

@media (min-width: 768px) and (max-width: 1023px) {
  display: flex;
    justify-content: center;

}
`;

export const SecondBox = styled.div`


@media (min-width: 1024px) {
  display: flex;
  flex-flow: column;
  justify-content: center;
}
`;


export const ContactMainAddress = styled.a`
display: block;
text-align: center;
margin-bottom: 10px;
font-size: 18px;
color: rgb(119, 136, 153);
`;


export const ContactMainphone = styled.a`
display: block;
text-align: center;
margin-bottom: 10px;
font-size: 18px;
color: rgb(119, 136, 153);
`;

export const ContactMainEmail = styled.a`
display: block;
text-align: center;
font-size: 18px;
color: rgb(119, 136, 153);
`;


export const ContactSocialMediaList = styled.ul`
display: flex;
justify-content: center;
margin-top: 15px;
`;

export const ContactSocialMediaListItem = styled.li`
&:not(:last-child) {
  margin-right: 10px;
}
`;