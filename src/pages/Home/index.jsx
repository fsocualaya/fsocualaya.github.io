import { Flex, Image, Text } from "@chakra-ui/react";

function Home(props){
    return (
        <Flex
            justifyContent={"space-evenly"}
            flexDirection = {["column", "column", "row"]}
            m = {["1em 1em", "2em 4em", "4em 8em"]}
            h = {"100%"}
            alignItems= "center"
        >

            <Flex
                w={["60%", "50%", "40%", "30%"]}
                alignSelf="center"
                textAlign={["center", "center", "justify", "justify"]}
            >
                <Text 
                    fontSize={["2xl","3xl","4xl","5xl"]}
                    mt = {["0em"]}>
                    Hemlo!
                    <Text fontSize={["sm","md","lg","xl"]}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, explicabo veniam accusantium eum aliquam animi officiis iste iure omnis. Debitis autem expedita commodi dolorum voluptates facilis et vitae cupiditate non.
                    </Text>  
                </Text>
            </Flex>

            

            <Image 
            src={"img/dev.png"}
            height={["15vh","20vh","50vh","50vh"]}
            overflow="hidden"
            />

        </Flex>
    )
}

export default Home;