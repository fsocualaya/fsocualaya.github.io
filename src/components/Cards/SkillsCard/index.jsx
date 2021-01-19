import {Divider, Flex, Spacer, Text} from '@chakra-ui/react'
// import { useState } from 'react';

function SkillsCard(props) {

    // TODO: Handle single skill case. Filter fails when it is no iterable.

    const skills = props.categories.map((category) => (

            <Flex
                flexDir="column"
                alignItems="center"
            >
                <Text fontSize="sm">{category}</Text>

                <Flex 
                    flexWrap="wrap"
                    justifyContent="space-between"
                >
                    {
                        props.children.filter(
                            child => child.props.expertise === category
                        )
                    }
                </Flex>

            </Flex>
    ))
    
    return(
        <Flex
            m={3}
            p={3}
            boxShadow="dark-lg"
            rounded="md"
            bgColor="#f2f2f2"
            w = {["60%","20vw"]}
            h = {"45vh"}
            flexDir="column"
            alignItems="center"
            textAlign="center"
        >
            <Text
                fontWeight="bold"
            >
                {props.title}
            </Text>

            <Divider/>

            {skills}

            <Spacer/>

        </Flex>
    )    
}

export default SkillsCard;