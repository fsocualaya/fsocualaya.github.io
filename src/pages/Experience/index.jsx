import {Center, Heading} from '@chakra-ui/react'
import ExperienceCard from '../../components/Cards/ExperienceCard'

function Experience(props){
    return (
        <Center
            minH="60vh"
            flexDir={["row","row", "row"]}
            flexWrap="wrap"
        >
            
            <ExperienceCard
                imageSrc="../img/exp/cmkt-blue.webp"
                company="CryptoMarket"
                job="Software Engineer"
                location="🧑🏽‍💻"
                period="2021 - Current"
                url = "https://cryptomkt.com"
            />

            <ExperienceCard
                imageSrc="../img/exp/bevertec.png"
                company="Bevertec"
                job="Software Engineering Intern"
                location="🇵🇪"
                period="2020 - 2021"
                url="https://www.bevertec.com/en/index-en/"
            />

            <ExperienceCard 
                imageSrc="../img/exp/xurface.png"
                company="Xurface"
                job="Android Developer"
                location="🇵🇪"
                period="2019 - 2020"
                url="https://www.xurface.com/"
            />
            
            <ExperienceCard 
                imageSrc="../img/exp/ctc.png"
                company="Crack The Code Peru"
                job="Computational Thinking Teacher"
                location="🇵🇪"
                period="2018 - 2019"
                url="https://www.crackthecode.pe/"
            />

        </Center>
    )
}

export default Experience;