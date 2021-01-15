import { Link as ReactRouter } from "react-router-dom";
import { Link, Flex} from '@chakra-ui/react';

function Header(props){
    return (
        <Flex
            as="nav"
            justify="space-between"
            flexDirection={["column", "row"]}
            alignItems="center"
            bg="black"
            color ="white"
            h = {["100%", "10vh"]}
            p = {["1vh 5vw","0vh 5vw"]}
        >
            <Link 
            textDecor="none"
            fontWeight="bolder" 
            color="white"
            as={ReactRouter} 
            to="/">
                Fernando Socualaya
            </Link>

            <Flex
                alignItems="center"
                w= {["100%", "100%", "60%"]}
                justifyContent={["center", "flex-end"]}
                flexDir={["column", "row"]}
                textAlign="center"
            >
                <Link  
                    m = {["1vh 2vw","0vh 2vw"]}
                    as={ReactRouter} 
                    to='/about'>
                    About
                </Link>
                
                <Link 
                    m = {["1vh 2vw","0vh 2vw"]}
                    as={ReactRouter} 
                    to='/projects'>
                    Projects
                </Link>
                
                {/* <Link
                    m = {["1vh 2vw","0vh 2vw"]}
                    as={ReactRouter} 
                    to='/contact'
                >
                    Contact
                </Link> */}

            </Flex>

        </Flex>
    )
}

export default Header;