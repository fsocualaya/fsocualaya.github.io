    import {Flex, Grid, Text} from '@chakra-ui/react'

function Footer(props){
    return (
        <Flex
            w ="100%"
            justifyContent="center"
            position={"absolute", "relative"}
            bottom={0}
            bgColor = "#080808"
            color = "white"
            minH = "10vh"
            alignItems="center"
            textAlign="center"
        >
            <Text>
                Made with 💙 by @fsocualaya
                <br/>
                🇵🇪 Lima, 2021 
            </Text>
            
            
        </Flex>
    )
}

export default Footer;