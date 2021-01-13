import { Link as ReactRouter } from "react-router-dom";
import { Link, Flex, Text} from '@chakra-ui/react';

function Header(props){
    return (
        <Flex
            as="nav"
            justify="space-between"
            wrap="wrap"
            m={"2em 4em"}
        >
            <Link textDecor="none" color="black"alignSelf="center"
             as={ReactRouter} to="/">Fernando Socualaya</Link>

            <Flex
                alignItems="center"
            >
                
                <Link m={[10]} as={ReactRouter} to='/about'>About</Link>
                <Link m={[10]} as={ReactRouter} to='/projects'>Projects</Link>
                
            </Flex>

        </Flex>
    )
}

export default Header;