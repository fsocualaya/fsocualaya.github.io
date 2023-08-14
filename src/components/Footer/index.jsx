    import {Flex, Text} from '@chakra-ui/react'

function Footer(props){
    return (
        <Flex
            w ="100%"
            justifyContent="center"
            position="relative"
            bottom={0}
            color = "white"
            minH = "5vh"
            alignItems="center"
            textAlign="center"
        >
            <Text
                lineHeight={1.5}
                m={0}
            >
                Made by @fsocualaya
                <br/>
                🇵🇪 2021 
            </Text>
            
            
        </Flex>
    )
}

export default Footer;