import {RiLinkedinLine, RiPhoneLine, RiGithubFill, RiMailLine} from 'react-icons/ri'
import {GoFilePdf} from 'react-icons/go'

import { Box, Center, Icon} from "@chakra-ui/react";

function Contact(props){

    return (
        <Box 
            position="fixed"
            top={"50%"}
            transform={"translateY(-50%)"}
            overflow="hidden"
            bgColor="black"
            color="white"
        >

            <Center p="1vw" objectFit="fill"
            _hover={{backgroundColor:"gray.900", color:"white"}}>
                <Icon 
                as ={RiPhoneLine}
                boxSize="2vw"
                />
            </Center>
            
            <Center p="1vw"
            _hover={{backgroundColor:"gray.900", color:"white"}}>
                <Icon
                as={RiLinkedinLine}
                boxSize="2vw"
                />                    
            </Center>
            
            <Center p="1vw"
            _hover={{backgroundColor:"gray.900", color:"white"}}>
                <Icon 
                as ={RiGithubFill}
                boxSize="2vw"/>
            </Center>
            
            <Center p="1vw"
            _hover={{backgroundColor:"gray.900", color:"white"}}>
                <Icon 
                as ={RiMailLine}
                boxSize="2vw"/>
            </Center>

            <Center p="1vw"
            _hover={{backgroundColor:"gray.900", color:"white"}}>
                <Icon 
                as ={GoFilePdf}
                boxSize="2vw"/>    
            </Center>
            
        </Box>
    )
}

export default Contact;