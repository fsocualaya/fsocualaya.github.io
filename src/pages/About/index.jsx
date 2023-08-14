import {Center, Flex, Link, Heading} from '@chakra-ui/react'
import { Link as ReactRouter, Redirect, Route, Switch, useRouteMatch} from 'react-router-dom'

import Education from '../Education'
import Experience from '../Experience'
import Skills from '../Skills'

function About(props){

    let {path, url} = useRouteMatch();

    return(
        <Flex
            minH ="93vh"
            flexDir="column"
            position="relative"
            alignItems="center"
            justifyContent="center"
            color="#54B4B7"
        >
            <Heading 
                as="h2"
                pt={10}
                m={0}
                >
                About me
            </Heading>
            
            <Flex
                w = {["80%", "60vw","40vw"]}
                justifyContent="space-around"
                p = "1vw"
                flexDir="row"
                alignItems="center"
                fontSize={'2xl'}
            >
                <Link 
                    _focus={{fontWeight: "bolder"}}
                    as={ReactRouter}
                    to={`${url}/education`}
                    >
                    Education
                </Link>

                <Link 
                    _focus={{fontWeight: "bolder"}}
                    as={ReactRouter}
                    to={`${url}/experience`}>
                    Experience
                </Link>

                <Link 
                    _focus={{fontWeight: "bolder"}}
                    as={ReactRouter}
                    to={`${url}/skills`}>
                    Skills
                </Link>
                
            </Flex>

            <Switch>
                <Route path={`${path}/education`} component={Education}/>
                <Route path={`${path}/experience`} component={Experience}/>
                <Route path={`${path}/skills`} component={Skills}/>
                <Redirect from="/*/*" to={"/404"}/>
            </Switch>

        </Flex>
    )
}

export default About;