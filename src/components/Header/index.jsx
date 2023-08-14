import { Link as ReactRouter } from "react-router-dom";
import { Text, Link, Flex, color, List, ListItem} from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router-dom';


function Header(props){

    const location = useLocation();
    return (
        <Flex
            as="nav"
            flexDirection={["column", "row"]}
            alignItems="center"
            h = {["7vh"]}
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
            <NavTool location={location}></NavTool>
        </Flex>
    )
}

function NavTool(props){
    let path = props.location.pathname.split('/')
    return(
        path.map((item, index) => (
            <NavItem key={index} index={index} pathItem={item} fullPath={path.slice(1, index+1)}/>
        )))
}

function NavItem(props){
    if(props.index==0 | props.pathItem==="")
        return null;
    
    let ref = ""
    for(let i in props.fullPath){
        ref += "/" + props.fullPath[i]
    }
    return( 
        <Flex color={"white"}>
            &nbsp; / &nbsp;
            <Link to={ref}
            as={ReactRouter} > 
                {props.pathItem}
            </Link>
            &nbsp;
        </Flex>
    )
}

export default Header;