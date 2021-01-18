import { Flex, Text, Image } from "@chakra-ui/react";

function EducationCardLeft(props){
    return(
        <Flex
            alignItems="center"
            border="1px"
            borderColor="black"
            backgroundColor="#f2f2f2"
            w="100%"
            justifyContent="space-around"
            m={1}>
            <Flex
                flexDir="column"
            >
                <Text m={0}>
                    {props.edu}
                </Text>
                <Text m={0}>
                    {props.field}
                </Text>
                <Text m={0}>
                    {props.role}
                </Text>
            </Flex>
            <Image 
                src={props.imageSrc}
                h ="20vh"
            />
        </Flex>
    )
}

export default EducationCardLeft;