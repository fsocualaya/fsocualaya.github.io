import {RiLinkedinLine, RiGithubFill, RiMailLine} from 'react-icons/ri'
import {GoFilePdf} from 'react-icons/go'

import { Box, Center, Icon, Link, border} from "@chakra-ui/react";

import Resume from "../../assets/docs/Socualaya_Fernando_Resume_EN.pdf"

function Contact(props){

    return (
        <Box 
            position={["relative","relative","fixed"]}
            top={["","50%"]}
            transform={"translateY(-50%)"}
            bgColor="#232429"
            color="#D6DAE7"
            display={["flex", "flex", "block"]}
            justifyContent={["center",""]}
            zIndex={100}
            mt={["15",""]}
        >
            
            <Link href="https://linkedin.com/in/fsocualaya" isExternal>
                <Center p="1vw"
                _hover={{backgroundColor:"#04050A", color:"#54B4B7", border:'1px solid #54B4B7'}}>
                        <Icon
                        as={RiLinkedinLine}
                        boxSize={["4vw","4vw","3vw","100%"]}/>
                </Center>
            </Link>                    

            <Link href="https://github.com/fsocualaya" isExternal>
                <Center p="1vw"
                _hover={{backgroundColor:"#04050A", color:"#54B4B7", border:'1px solid #54B4B7'}}>
                        <Icon 
                        as ={RiGithubFill}
                        boxSize={["4vw","4vw", "3vw","2vw"]}/>
                </Center>
            </Link>

            <Link href="mailto:fernando.socualaya@utec.edu.pe">
                <Center p="1vw"
                _hover={{backgroundColor:"#04050A", color:"#54B4B7", border:'1px solid #54B4B7'}}>
                        <Icon 
                        as ={RiMailLine}
                        boxSize={["4vw","4vw", "3vw","2vw"]}/>
                </Center>
            </Link>

            <Link href={ Resume } download>
                <Center p="1vw"
                _hover={{backgroundColor:"#04050A", color:"#54B4B7", border:'1px solid #54B4B7'}}>
                        <Icon 
                        as ={GoFilePdf}
                        boxSize={["4vw","4vw", "3vw", "2vw"]}/>
                </Center>
            </Link>    
            
        </Box>
    )
}

export default Contact;