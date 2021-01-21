import {Flex, Text, Heading} from '@chakra-ui/react'
import ProjectCard from '../../components/Cards/ProjectCard'

function Projects(props){
    return (
        <Flex
            minH ="80vh"
            flexDir="column"
            position="relative"
            alignItems="center"
        >
            <Heading 
                as="h2"
                pt={10}
                m={0}
                >
                Projects
            </Heading>

            <Text>
                Click for source code or preview. 
            </Text>

            <Flex
                flexWrap="wrap"
                flexGrow={1}
                alignItems="center"
                justifyContent="center"
                w="80vw"
            >

                <ProjectCard
                    imageSrc={"img/proj/portfolio.png"}
                    url="https://github.com/fsocualaya/fsocualaya.github.io"
                    name="Personal Portfolio"
                    tech={["front/react.svg","pl/js.png"]}
                    year={"2021"}
                />

                <ProjectCard
                    imageSrc={"img/proj/sperm_det.png"}
                    url="https://drive.google.com/file/d/1-6f6Lr6YUYYejrU-IWUetCRfC59ARPCD/view?usp=sharing"
                    name="Sperm Detection"
                    tech={["pl/python.png","ai_ds/darknet.png", "other/docker.png"]}
                    year={"2020"}
                />

                <ProjectCard
                    imageSrc={"img/proj/gng.png"}
                    url="https://github.com/fsocualaya/growing-neural-gas"
                    name="Growing Neural Gas"
                    tech={["pl/c++.svg", "ai_ds/opencv.png"]}
                    year={"2020"}
                />

                <ProjectCard
                    imageSrc={"img/proj/cheese.png"}
                    url="https://fsocualaya.github.io/cheese/"
                    name="Cheese AI"
                    tech={["pl/js.png"]}
                    year={"2020"}
                />

                <ProjectCard
                    imageSrc={"img/proj/bayes.png"}
                    url="https://github.com/fsocualaya/bayesian_net"
                    name="Bayesian Network"
                    tech={["pl/c++.svg"]}
                    year={"2020"}
                />

                <ProjectCard
                    imageSrc={"img/proj/neural_net.png"}
                    url="https://github.com/fsocualaya/neural_network"
                    name="Neural Network"
                    tech={["pl/c++.svg"]}
                    year={"2020"}
                />

                <ProjectCard
                    imageSrc={"img/proj/xtasis.png"}
                    name="Xtasis"
                    tech={["mobile/android.png","pl/java.png", "db/firebase.png"]}
                    year={"2019"}
                />

                <ProjectCard
                    imageSrc={"img/proj/skeletonization.png"}
                    url="https://github.com/fsocualaya/skeletonization"
                    name="Skeletonization"
                    tech={["pl/c++.svg","ai_ds/opencv.png"]}
                    year={"2019"}
                />

            </Flex>
        </Flex>
    )
}

export default Projects;