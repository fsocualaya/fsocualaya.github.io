import { Center, Flex, Text, Heading, Image } from "@chakra-ui/react";
import EducationCardLeft from "../../components/EducationCard/EducationCardLeft";
import EducationCardRight from "../../components/EducationCard/EducationCardRight";

function Education(props){
    console.log("This is education")

    return (
        <Center
            h="60vh"
            flexDir="column"
        >

            <EducationCardLeft
                imageSrc="../img/utec.png"
                edu="University of Engineering and Technology"
                field="Computer Science"
                role="Student of 4th year"
            />

            <EducationCardRight
                imageSrc="../img/sers.png"
                edu="Global SERS"
                field="AI For Local Value"
                role="Attendant"
            />
            
        </Center>
    )
}

export default Education;