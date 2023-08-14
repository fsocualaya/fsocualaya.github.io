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
                backgroundColor="#90e0ef"
                color="#080B12"
                justifyContent="space-around"
                m={3}
                p={3}
                _hover={{backgroundColor:"#04050A", border:'2px solid #54B4B7',color:"#D6DAE7"}}>
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
                    h ="10vh"
                    m={[2,0]}
                />
            </Flex>
        </Link>

    )
}

export default EducationCardLeft;