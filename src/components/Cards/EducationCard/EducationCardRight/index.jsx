import { Link, Flex, Text, Image } from "@chakra-ui/react";

function EducationCardRight(props){
    return(
        <Link
            _hover={{textDecoration:"none"}}
            w="100%"
            href={props.url}
            isExternal
        >
            <Flex
                flexDir={["column", "row"]}
                alignItems="center"
                boxShadow="dark-lg"
                rounded="md"
                backgroundColor="#90e0ef"
                justifyContent="space-around"
                color="black"
                m={3}
                p={3}
                _hover={{backgroundColor:"#04050A", border:'2px solid #54B4B7',color:"#D6DAE7"}}>
                
                <Image 
                    src={props.imageSrc}
                    h ="10vh"
                    m={[2,0]}
                />

                <Flex
                    flexDir="column"
                    alignItems={["center", "flex-end"]}
                    mr={[0,5]}
                    textAlign={["center", "end"]}
                >
                    <Text 
                        m={0}
                        fontWeight="bold"
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
                
            </Flex>
        </Link>

    )
}

export default EducationCardRight;