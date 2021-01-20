import { Link, Flex, Text, Image } from "@chakra-ui/react";

function EducationCardLeft(props){
    return(
        <Link
            _hover={{textDecoration:"none"}}
            w="100%"
            href={props.url}
            isExternal
        >
            <Flex
                flexDir={["column-reverse", "row"]}
                alignItems="center"
                boxShadow="dark-lg"
                rounded="md"
                backgroundColor="#f2f2f2"
                justifyContent="space-around"
                m={3}
                p={3}
                _hover={{bgColor:"#dadada"}}
                >
                <Flex
                    flexDir="column"
                    alignItems={["center", "flex-start"]}
                    mr={[0, 5]}
                    textAlign={["center","start"]}
                >
                    <Text 
                        m={0}
                        fontWeight="bold"
                        fontSize="md"
                        >
                        {props.edu}
                    </Text>

                    <Text m={0}
                        fontWeight="light"
                        fontSize="sm"
                    >
                        {props.field} <br/> {props.role} <br/> {props.location}
                    </Text>
                    
                </Flex>
                <Image 
                    src={props.imageSrc}
                    h ="12vh"
                    m={[2,0]}
                />
            </Flex>
        </Link>

    )
}

export default EducationCardLeft;