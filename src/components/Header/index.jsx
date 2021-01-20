import { Link as ReactRouter } from "react-router-dom";
import { Link, Flex} from '@chakra-ui/react';

function Header(props){
    return (
        <Flex
            as="nav"
            justify="space-between"
            flexDirection={["column", "row"]}
            alignItems="center"
            bgColor="#c1f7f9"
            color ="#031a4c"
            h = {["10vh"]}
            p = {["1vh 5vw","0vh 5vw"]}
            position="relative"
        >
            <Link 
            
            fontWeight="bolder"
            as={ReactRouter} 
            to="/"
            >
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
                    _focus={{fontWeight: "bolder"}}
                    as={ReactRouter} 
                    to='/about'>
                    About
                </Link>
                
                <Link 
                    m = {["1vh 2vw","0vh 2vw"]}
                    _focus={{fontWeight: "bolder"}}
                    as={ReactRouter}
                    to='/projects'>
                    Projects
                </Link>

            </Flex>

        </Flex>
    )
}

export default Header;