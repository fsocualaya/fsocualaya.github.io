import { Flex, Image, Text, Heading} from "@chakra-ui/react";

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
                flexDir="column"
            >
                <Heading 
                    fontSize={["2xl","3xl","4xl","5xl"]}
                    m = {["0em 0em"]}
                    as="h2"
                    >
                    Hemlo!
                </Heading>

                <br/>

                <Text as="p" fontSize={["sm","sm","md","lg"]}>
                    I'm a computer science student with experience in data structures implementation, object
                    oriented programming, web and mobile development.
                    <br/>
                    Passionate about <b>learning</b>, teaching and sharing knowledge. 
                    <br/>
                    <b>Wanna stay in touch?</b> You'll find my social media at your left (or top). Don't hesitate 
                    to contact me. <br/> <br/> Cheers and vibes!
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