import { Flex, Image, Text, Container } from "@chakra-ui/react";

function Home(props){
    return (
        <Flex 
        m="6em" 
        justifyContent="space-around">

            <Container w={["100%", "50%"]}>
                <Text alignSelf="center" fontSize="5xl">
                    Hemlo!
                    <Text fontSize="xl">
                        I'm a Computer Science student at UTEC (Lima, Peru)
                        with experience in data structures implementation,
                        object oriented programming and mobile development. <br/> 
                        Passionate about learning, teaching and sharing knowledge interested in . 
                    </Text>  
                </Text>
            </Container>

            

            <Image src={"img/dev.png"}/>

        </Flex>
    )
}

export default Home;