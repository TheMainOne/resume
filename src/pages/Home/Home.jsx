import React from 'react'
import girl from "../../icons/profiles/hero_colorEdited.jpg"
import {FlexContainer, Title, SubTitle, Text, Container} from "./Home.styled"
import { IoCaretForward } from "react-icons/io5"
import {Button, NavItem} from "../../utils/commonStyles"


const Home = () => {
    return (

  <main>
      <FlexContainer> 
       <div>                      
               <Title> Hi, I'm Elena Yagovkina</Title>
               <SubTitle> Software Quality Assurance Engineer</SubTitle>
               <Text> Thank you for stopping by my web page where you can find more information about me and the work I do.</Text>

          <NavItem to="/about" key={"about"}> <Button>About me<IoCaretForward/> </Button> </NavItem>   
        </div>
          
               
        <Container> <img src={girl} alt="girl working with laptop" /></Container>
      </FlexContainer>
                
  </main>
       
          
    ) }

export default Home;