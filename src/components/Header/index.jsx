import { Link as ReactRouter } from "react-router-dom";
import { Link, Flex} from '@chakra-ui/react';

function Header(props){
    return (
        <Flex
            as="nav"
            justify="space-between"
            m={"2em 4em"}
            flexDirection={["column", "row"]}
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
                justifyContent={["center", "flex-end"]}
                flexDir={["column", "row"]}
                textAlign="center"

            >
                <Link  
                mr="2em"
                ml="2em"
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
                
            </Flex>

        </Flex>
    )
}

export default Header;