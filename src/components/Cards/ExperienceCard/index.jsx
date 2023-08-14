import { Flex, Text, Link, Image, Center, Divider, Spacer } from "@chakra-ui/react";

function ExperienceCard(props) {

    return(
        <Link
            key ={props.company}
            _hover={{textDecoration:"none"}}
            href={props.url}
            isExternal
        >
            <Flex
                flexDir="column"
                alignItems="center"
                backgroundColor="#90e0ef"
                justifyContent="space-around"
                m={3}
                p={3}
                _hover={{backgroundColor:"#04050A", border:'2px solid #54B4B7',color:"#D6DAE7"}}
                h={["30vh"]}
                w={["30vw", "30vw","15vw"]}
                boxShadow="dark-lg"
                rounded="md"
                color={"black"}
            >
                <Center
                    h="40%"
                >
                    <Image
                        src={props.imageSrc}
                        maxW={["20vw", "18vw","15vw"]}
                        maxH="10vh"
                        m={2}
                    />
                </Center>

                <Divider/>

                <Flex
                    flexDir="column"
                    alignItems="center"
                    textAlign="center"
                    lineHeight="1.5"
                >
                    <Text m={0}
                        fontWeight="bold"
                        fontSize="md"
                    >
                        {props.company}
                    </Text>

                    <Text m={0}
                        fontSize="sm"
                    >
                        {props.job}
                    </Text>

                    <Text m={0}>
                        {props.location}
                    </Text>

                    <Text m={0}
                        fontSize="sm"
                        fontWeight="light"
                        fontStyle="italic"
                    >
                        {props.period}
                    </Text>
                </Flex>

            </Flex>
        </Link>
    )
}

export default ExperienceCard;