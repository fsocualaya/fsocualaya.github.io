import { Link, Divider, Flex, Box, Image, Text } from "@chakra-ui/react";


function ProjectCard(props) {
    return(

        <Link
            _hover={{textDecoration:"none"}}
            href={props.url}
            isExternal
        >
            <Flex
                boxShadow="dark-lg"
                rounded="md"
                bgColor="#f2f2f2"
                _hover={{bgColor:"#dadada"}}
                flexDir="column"
                w={["60vw","35vw","20vw"]}
                h="100%"
                alignItems="center"
                m={3}
            >
                <Image
                    src={props.imageSrc}
                    w="90%"
                    m={2}
                    h={"18vh"}
                    objectFit="cover"
                />

                <Divider m={0}/>

                <Flex
                    flexDir="column"
                    alignItems="center"
                    textAlign="center"
                    m={2}
                    w="100%"
                >
                    <Text
                        m={0}
                        fontWeight="bold"
                    >
                        {props.name}
                    </Text>
                    <Flex
                        justifyContent="space-evenly"
                        width="80%"
                        flexWrap="wrap"
                        m={1}
                        alignItems="center"
                    >
                        {props.tech.map((techUrl) => (
                            <Image
                                src={`../img/skills/${techUrl}`}
                                w={["1.5vw"]}
                            />
                        ))
                        }
                    </Flex>
                    <Text
                        m={0}
                        fontSize="sm"
                        fontWeight="light"
                    >
                        {props.year}
                    </Text>

                    
                </Flex>
            </Flex>
        </Link>
    )
}

export default ProjectCard;