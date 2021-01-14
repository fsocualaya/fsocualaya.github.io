import { Link as ReactRouter } from "react-router-dom";
import { Link, Flex} from '@chakra-ui/react';

function Header(props){
    return (
        <Flex
            as="nav"
            justify="space-between"
            m={["1em 2em","1em 4em"]}
            flexDirection={["column", "column", "row"]}
            alignItems="center"
        >
            <Link 
            textDecor="none" 
            color="black"
            alignSelf="center"
            as={ReactRouter} 
            to="/">
                Fernando Socualaya
            </Link>

            <Flex
                alignItems="center"
                w= {["100%", "100%", "60%"]}
                justifyContent={["center", "center", "flex-end"]}
                flexDir={["column", "column", "row"]}
                textAlign="center"
                m = {["2em"]}
            >
                <Link  
                    mr="2em"
                    ml="2em"
                    mt={"2em", "0em"}
                    as={ReactRouter} 
                    to='/about'>
                    About
                </Link>
                
                <Link 
                    mr="2em"
                    ml="2em"
                    as={ReactRouter} 
                    to='/projects'>
                    Projects
                </Link>
                
                <Link
                    mr="2em"
                    ml="2em"
                    as={ReactRouter} 
                    to='/contact'
                >
                    Contact
                </Link>

            </Flex>

        </Flex>
    )
}

export default Header;