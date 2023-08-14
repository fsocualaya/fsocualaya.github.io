import { Link,Flex, Image, Text, Heading} from "@chakra-ui/react";
import { Link as ReactRouter } from "react-router-dom";
import TypingAnimation from "../../utils/animations/TypingAnimation";

function Home(props){
    return (
        <Flex
            justifyContent={"space-evenly"}
            flexDirection = {["column", "row"]}
            h = {"93vh"}
            w = {"100vw"}
            alignItems= "center"
            marginBottom="0em"
            color="#D6DAE7"
        >

            <Flex
                w={["70%", "60%", "50%", "40%"]}
                textAlign={["center", "center"]}
                flexDir="column">
                
                <Heading 
                    fontSize={["2xl","3xl","4xl","5xl"]}
                    m = {["0em 0em"]}
                    as="h1">
                    <TypingAnimation text="Hi, I'm Fernando"/>
                    
                </Heading>
                <Text
                    fontSize="2xl">
                    Software Engineer
                </Text>
                
                <Flex
                alignItems="center"
                w= {["100%", "100%", "100%"]}
                justifyContent={["center", "center"]}
                flexDir={["column", "row"]}
                textAlign="center"
                fontSize={'2xl'}
                >
                    <Link  
                        m = {["1vh 2vw","0vh 2vw"]}
                        _focus={{fontWeight: "bolder"}}
                        as={ReactRouter} 
                        to='/about'
                        >
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
        </Flex>
    )
}

export default Home;