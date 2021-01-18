import {Center, Flex, Text, Link, Heading} from '@chakra-ui/react'
import { BrowserRouter as Router, Link as ReactRouter, Redirect, Route, Switch, useRouteMatch} from 'react-router-dom'

import Education from '../Education'
import Experience from '../Experience'
import NotFound from '../NotFound'
import Skills from '../Skills'

function About(props){

    let {path, url} = useRouteMatch();

    return(
        <Center
            h ="80vh"
            flexDir="column"
        >
            <Heading 
                as="h2"
                m={0}>
                About me
            </Heading>
            
            <Flex
                w = "40vw"
                justifyContent="space-around"
                pt = "1vw"
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

        </Center>
    )
}

export default About;