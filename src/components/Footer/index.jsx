import {GoHeart} from 'react-icons/go'

import {Flex, Text} from '@chakra-ui/react'

function Footer(props){
    return (
        <Flex
            w ="100%"
            justifyContent="center"
            position={"absolute"}
            bottom={0}
            bgColor = "black"
            color = "white"
        >
            <Text textAlign="center">
                Made with 
                <GoHeart
                    textAlign="center"
                    color="red"
                />
                by @fsocualaya 

                <br/>

                Hire me please
            </Text>
        </Flex>
    )
}

export default Footer;