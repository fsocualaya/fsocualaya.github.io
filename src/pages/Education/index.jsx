import { Center } from "@chakra-ui/react";
import EducationCardLeft from "../../components/Cards/EducationCard/EducationCardLeft";
import EducationCardRight from "../../components/Cards/EducationCard/EducationCardRight";

function Education(props){
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
                role="BSc. Computer Science"
                url="https://utec.edu.pe/carreras/ciencia-de-la-computacion/acreditacion"
                location="Lima, 🇵🇪 : [ 2017 - 2022 ]"
            />

            <EducationCardRight
                imageSrc="../img/edu/logo-epita.svg"
                edu="EPITA: École des Ingénieurs en Informatique"
                field="Computer Security"
                role="Exchange Student"
                url="https://www.epita.fr/"
                location="Paris, 🇫🇷 : [2021 - 2021]"
            />

            <EducationCardLeft
                imageSrc="../img/edu/sers.png"
                edu="Global SERS"
                field="AI For Local Value"
                role="Attendant"
                url="https://globalgers.org/"
                location="Remote 👨‍💻 : [2020]"
            />
            
        </Center>
    )
}

export default Education;