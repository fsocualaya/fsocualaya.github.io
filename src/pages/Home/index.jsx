import { Flex, Image, Box, Text } from "@chakra-ui/react";

function Home(props){
    return (
        <Flex m="4em 4em" textAlign="center" justifyContent="space-evenly">

            <Text alignSelf="center">
                Hemlo! 
            </Text>

            <Image src={"img/dev.png"}/>

        </Flex>
    )
}

export default Home;