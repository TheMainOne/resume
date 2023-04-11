import React from 'react'
import girl from "../../icons/profiles/hero_colorEdited.jpg"
import {FlexContainer, Title, SubTitle, Text, Container, TextWrapper} from "./Home.styled"
import {Button, NavItem} from "../../utils/commonStyles"


const Home = () => {
    return (

  <main>
      <FlexContainer> 
       <TextWrapper>                      
               <Title> Hi, I'm Elena Yagovkina</Title>
               <SubTitle> Software Quality Assurance Engineer</SubTitle>
               <Text> Thank you for stopping by my web page where you can find more information about me and the work I do.</Text>

          <NavItem to="/about" key={"about"}> <Button>About me</Button> </NavItem>   
        </TextWrapper>
          
               
        <Container> <img src={girl} alt="girl working with laptop" /></Container>
      </FlexContainer>
                
  </main>
       
          
    ) }

export default Home;