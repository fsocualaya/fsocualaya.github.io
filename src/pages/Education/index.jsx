import { Center } from "@chakra-ui/react";
import EducationCardLeft from "../../components/Cards/EducationCard/EducationCardLeft";
import EducationCardRight from "../../components/Cards/EducationCard/EducationCardRight";

function Education(props){
    console.log("This is education")

    return (
        <Center
            minH="60vh"
            flexDir="column"
            w={["80vw","70vw", "60vw", "40vw"]}
        >

            <EducationCardLeft
                imageSrc="../img/edu/utec.png"
                edu="University of Engineering and Technology"
                field="Computer Science"
                role="4th year student"
                url="https://utec.edu.pe/"
                location="🇵🇪 : [ 2017 - Current ]"
            />

            <EducationCardRight
                imageSrc="../img/edu/sers.png"
                edu="Global SERS"
                field="AI For Local Value"
                role="Attendant"
                url="https://globalgers.org/"
                location="👨‍💻 : [2020]"
            />
            
        </Center>
    )
}

export default Education;