import profilePicture from '../../icons/profiles/profilePicture.jpg';

import { Button, NavItem } from '../../utils/commonStyles';
import {
  Box,
  LeftBox,
  RightBox,
  TextBox,
  TitleText,
  Text,
} from './AboutMe.styled';
import { IoCaretForward } from 'react-icons/io5';
import TechSkills from '../../components/TechSkills/TechSkills';

const AboutMe = () => {
  return (
    <main>
      <Box>
        <LeftBox>
          <img src={profilePicture} alt="Elena Yagovkina" />
        </LeftBox>

        <RightBox>
          <TextBox>
            <TitleText> Hi, there. </TitleText>
            <Text>
              Results-oriented quality assurance specialist with digital
              marketing background. Skilled in analyzing functional and
              technical requirements during the complete SDLC including mobile
              compatibility and mobile application testing. Critical thinker
              with the ability to prioritize and meet deadlines. Strong
              attention to detail. Work well in a team and independently. Quick
              learner. 
              </Text>
              <Text>
               Platforms: Mac OS, Windows, Android, iOS 
              </Text>
              <Text>
               Databases: MySQL, DBeaver, Maria DB 
              </Text>
              <Text>
               Testing Tools: Chrome Dev Tools, BrowserStack, Postman, Appcenter, Test Flight, Android Studio,
              Xcode, Charles Proxy 
              </Text>
              <Text>
               Test Automation: Selenium Web Driver, Cucumber, Visual Studio Code 
              </Text>
              <Text>
               Other tools: JIRA, Zephyr, Confluence, Coggle, PicPic, Slack
              </Text>
          </TextBox>

          <NavItem to="/projects" key={'projects'}>
            {' '}
            <Button>
              Projects
              <IoCaretForward />{' '}
            </Button>
          </NavItem>
        </RightBox>
      </Box>

      <TechSkills />
    </main>
  );
};

export default AboutMe;
