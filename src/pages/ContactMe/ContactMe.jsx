import {
  ContainerWrapper,
  FirstBox,
  SecondBox,
  ContainerTitle,
  ContactMainAddress,
  ContactMainphone,
  ContactSocialMediaList,
  ContactSocialMediaListItem,
  ContactMainEmail
} from './ContactMe.styled';
import contactImage from '../../icons/profiles/pngwing.com.png';
import { socialMedia } from '../../utils/socialMedia';

const ContactMe = () => {
  return (
    <ContainerWrapper>
      <FirstBox>
        <img src={contactImage} alt="Bug searching" />
      </FirstBox>
      <SecondBox>
        <ContainerTitle>Please fell free to contact me:</ContainerTitle>
        <ContactMainAddress
          href="https://goo.gl/maps/Nt4taN38VudNRKTJ8"
          target="_blank"
        >
          Los-Angeles, California
        </ContactMainAddress>
        <ContactMainphone href="tel:+18182944801">
          818 294 48 01
        </ContactMainphone>
        <ContactMainEmail href='mailto:ellen.yagovkina@gmail.com'>ellen.yagovkina@gmail.com</ContactMainEmail>
        <ContactSocialMediaList>
          {socialMedia.map(({ id, name, icon, link }) => (
            <ContactSocialMediaListItem key={id}>
              <a href={link} target='_blank' rel='noreferrer'>
                <img src={icon} alt={name} width="40" height="40" />
              </a>
            </ContactSocialMediaListItem>
          ))}
        </ContactSocialMediaList>
      </SecondBox>
    </ContainerWrapper>
  );
};

export default ContactMe;
