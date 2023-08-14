import {Divider, Flex, Text} from '@chakra-ui/react'
// import { useState } from 'react';

function SkillsCard(props) {

    // TODO: Handle single skill case. Filter fails when it is no iterable.

    const skills = props.categories.map((category) => (
            <Flex
                key={category}
                flexDir="column"
                alignItems="center"
                w="80%"
                flexGrow={1}
                justifyContent="flex-start"
            >
                <Text fontSize="sm">{category}</Text>

                <Flex 

                    flexWrap="wrap"
                    w="100%"    
                    justifyContent="space-around"
                    flexGrow={1}
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
            key= {props.title}
            m={3}
            p={3}
            boxShadow="dark-lg"
            rounded="md"
            bgColor="#90e0ef"
            w = {["60vw","45vw", "30vw","15vw"]}
            h = {"40vh"}
            flexDir="column"
            alignItems="center"
            textAlign="center"
            overflow="auto"
            color={'black'}
        >
            <Text
                fontWeight="bold">
                {props.title}
            </Text>

            <Divider/>

            <Flex
                flexDir="column"
                alignItems="center"
                w="100%"
                pb={3}
                justifyContent="space-between"
                flexGrow={1}
            >
                {skills}            
            </Flex>            
            


        </Flex>
    )    
}

export default SkillsCard;