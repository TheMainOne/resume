// import React from 'react';
// import {ContainerStyle} from "./ContactMe.styled"
// import { Main } from "./ContactMe.styled"
// import { Input, Button, Box, Flex, Textarea, Select, Text, VStack } from '@chakra-ui/react'
// import { HiOutlineMail } from "react-icons/hi"


const requestType = ["job offer", "collaboration", "feedback", "other"]


const ContactMe = () => {
  return(
    <></>
  )
}
 
// const ContactMe = () => {


//     return (<Main>
//         <ContainerStyle> 

//         <Flex  align="center" justify="center" > 
      
//         <form  autoComplete="off" action="https://getform.io/f/b420cd85-e6df-4952-be08-58ad59c2886b" method="POST" > 

        
//         <Box bg="white" bgColor='blackAlpha.50'   boxShadow='2xl' rounded="md"   w="100%" p={6} align="center"  >

//         <Box mb={4} >                  
//         <Text fontSize='3xl' as='b' color='brand.accentColor'> Contact Me </Text>
//         </Box> 
//         <VStack spacing={4} align="flex-start"  w={[280, 450]}>
                            
//         <Input bg="white" type="text" name="name" placeholder="Enter your name" pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" required /> 
       
//         <Input  bg="white"  type="text" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" title="Invalid email address" placeholder="Enter your email" required /> 
        
                
//         <Select bg="white" type="select" name="selection" required> <option value="" > Select type of request </option>
//                     {requestType.map((type, index) => (<option value={type} key={index}> {type}</option>))}
//                 </Select>
        
                
//         < Textarea bg="white"  name="message" type="text" placeholder="Enter your message" required/> 
           
//       </VStack>
                             
//     <Button  leftIcon={<HiOutlineMail />} bgColor="brand.accentColor" color='brand.primaryColor' _hover={{
//     background: "brand.borderColor",
//     color: "brand.accentColor",
//   }} variant='solid' type="submit"  m={6} p={2} align='center'> Submit </Button>
                                 
//       </Box>
  
//     </form>

//     </Flex>
            
//     </ContainerStyle>
//     </Main>)
// }


export default ContactMe;

