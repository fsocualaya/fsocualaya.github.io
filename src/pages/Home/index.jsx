import { Flex, Image, Text } from "@chakra-ui/react";

function Home(props){
    return (
        <Flex
            justifyContent={"space-evenly"}
            flexDirection = {["column", "row"]}
            h = {"80vh"}
            alignItems= "center"
            marginBottom="0em"
        >

            <Flex
                w={["60%", "50%", "40%", "30%"]}
                textAlign={["center", "justify"]}
            >
                <Text 
                    fontSize={["2xl","3xl","4xl","5xl"]}
                    m = {["0em 0em"]}>
                    Hemlo!
                    <Text fontSize={["sm","md","lg","xl"]}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, explicabo veniam accusantium eum aliquam animi officiis iste iure omnis. Debitis autem expedita commodi dolorum voluptates facilis et vitae cupiditate non.
                    </Text>  
                </Text>
            </Flex>

            

            <Image 
            src={"img/dev.png"}
            height={["30vh","40vh","50vh","50vh"]}
            overflow="hidden"
            />

        </Flex>
    )
}

export default Home;