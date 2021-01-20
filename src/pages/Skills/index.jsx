import { Center, Flex, Image, Text } from '@chakra-ui/react'
import SkillsCard from '../../components/Cards/SkillsCard'

function Skill(props){
    return (
        <Flex 
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            maxW="33%"
            >
            <Image src={props.imageSrc}
                w={["8vw","6vw","4vw","2vw"]}
            />
            <Text m={0}
                fontSize="xs"
                fontWeight="light"
            > 
                {props.name}
            </Text>
        </Flex>
    )
}

function Skills(props){
    return (
        <Center
            minH="60vh"
            flexWrap="wrap"
            w="80vw"
            pb={15}
            pt={15}
        >

            <SkillsCard title="Operating Systems"
                categories = {["Advanced", "Intermediate"]}
            >
                <Skill 
                    imageSrc="../img/skills/os/tux.png"
                    name="Other Linux Based Distributions "
                    expertise="Intermediate"
                />

                <Skill 
                    imageSrc="../img/skills/os/ubuntu.svg"
                    name="Ubuntu"
                    expertise="Advanced"
                />

                <Skill 
                    imageSrc="../img/skills/os/windows.png"
                    name="Windows"
                    expertise="Advanced"
                />

            </SkillsCard>

            <SkillsCard title="Programming Languages"
                categories={["Advanced", "Intermediate", "Beginner"]}
            >
                <Skill
                    imageSrc="../img/skills/pl/c++.svg"
                    name="C++"
                    expertise="Advanced"
                />
                <Skill
                    imageSrc="../img/skills/pl/python.png"
                    name="Python"
                    expertise="Advanced"
                />
                <Skill
                    imageSrc="../img/skills/pl/java.png"
                    name="Java"
                    expertise="Advanced"
                />
                <Skill
                    imageSrc="../img/skills/pl/js.png"
                    name="Javascript"
                    expertise="Intermediate"
                />
                <Skill
                    imageSrc="../img/skills/pl/golang.png"
                    name="Golang"
                    expertise="Intermediate"
                />
                <Skill
                    imageSrc="../img/skills/pl/r.png"
                    name="R"
                    expertise="Beginner"
                />
                <Skill
                    imageSrc="../img/skills/pl/dart.png"
                    name="Dart"
                    expertise="Beginner"
                />
            </SkillsCard>

            <SkillsCard title="Frontend"
                categories={["Advanced", "Intermediate", "Beginner"]}
            >
                <Skill
                    imageSrc="../img/skills/front/html.png"
                    name="HTML5"
                    expertise="Advanced"
                />
                <Skill
                    imageSrc="../img/skills/front/css.png"
                    name="CSS3"
                    expertise="Advanced"
                />

                <Skill
                    imageSrc="../img/skills/front/react.svg"
                    name="React"
                    expertise="Intermediate"
                />
                <Skill
                    imageSrc="../img/skills/front/chakra.png"
                    name="Chakra UI"
                    expertise="Intermediate"
                />

                <Skill
                    imageSrc="../img/skills/front/angular.png"
                    name="Angular"
                    expertise="Beginner"
                />
            </SkillsCard>

            <SkillsCard title="Backend"
                categories={["Intermediate", "Beginner"]}
            >
                <Skill
                    imageSrc="../img/skills/back/gin.png"
                    name="Gin"
                    expertise="Intermediate"
                />
                <Skill
                    imageSrc="../img/skills/back/flask.svg"
                    name="flask"
                    expertise="Beginner"
                />
                <Skill
                    imageSrc="../img/skills/back/nodejs.png"
                    name="Node.js"
                    expertise="Intermediate"
                />
                <Skill
                    imageSrc="../img/skills/back/spring.png"
                    name="Spring"
                    expertise="Beginner"
                />
            </SkillsCard>

            <SkillsCard title="Databases"
                categories={["Advanced", "Intermediate"]}
            >
                <Skill
                    imageSrc="../img/skills/db/firebase.png"
                    name="Firebase"
                    expertise="Advanced"
                />
                <Skill
                    imageSrc="../img/skills/db/postgresql.png"
                    name="Postgresql"
                    expertise="Intermediate"
                />
                <Skill
                    imageSrc="../img/skills/db/mongodb.png"
                    name="MongoDB"
                    expertise="Intermediate"
                />
            </SkillsCard>

            <SkillsCard title="Mobile"
                categories={["Intermediate", "Beginner"]}
            >
                <Skill
                    imageSrc="../img/skills/mobile/android.png"
                    name="Android"
                    expertise="Intermediate"
                />
                <Skill
                    imageSrc="../img/skills/mobile/flutter.png"
                    name="Flutter"
                    expertise="Beginner"
                />
            </SkillsCard>

            <SkillsCard title="Others"
                categories={["Advanced", "Intermediate", "If you need anything else"]}
            >
                <Skill
                    imageSrc="../img/skills/other/git.png"
                    name="Git"
                    expertise="Advanced"
                />
                <Skill
                    imageSrc="../img/skills/other/md.png"
                    name="Markdown"
                    expertise="Advanced"
                />
                <Skill
                    imageSrc="../img/skills/other/docker.png"
                    name="Docker"
                    expertise="Intermediate"
                />
                <Skill
                    imageSrc="../img/skills/other/latex.png"
                    name="LaTeX"
                    expertise="Intermediate"
                />
                <Skill
                    imageSrc="../img/skills/other/stack_overflow.png"
                    name="Stack Overflow"
                    expertise="If you need anything else"
                />
                <Skill
                    imageSrc="../img/skills/other/google.png"
                    name="I can always Google it"
                    expertise="If you need anything else"
                />

            </SkillsCard>


        </Center>
    )
}

export default Skills;