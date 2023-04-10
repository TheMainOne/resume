import { techSkills } from "../../utils/technologies";
import { Title, TechFlex, Item, ImageBox, TechText } from "./TechSkills.styled"

const TechSkills = () => {

  return (
    <>
    <Title> Tech Skills </Title>
    
    <TechFlex>
          
    {techSkills.map(({ id, label, icon }) => (
      <Item key={id}>
      <ImageBox>
        <img src={icon} alt={label} width="40" height="40" />
      </ImageBox>
      <TechText>{label}</TechText>
       </Item>))}    
        
    </TechFlex> 
         
    </>)
   
        }

export default TechSkills;