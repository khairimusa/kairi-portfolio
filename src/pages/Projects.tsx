import { Box, Container, Stack, Heading, SlideFade } from "@chakra-ui/react"
import { useState, useEffect } from "react";

const Projects = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
  }, [load])

  return (
    <SlideFade in={load} offsetY={'100px'}>
      <Box p={4} h='calc(100vh)'>

        <Container maxW={'3xl'} alignContent={'center'}>

          <Stack
            as={Box}
            textAlign={'center'}
            justifyContent={'center'}
            spacing={{ base: 8, md: 14 }}
            py={20}
          >

            <Heading
              fontWeight={600}
              fontFamily={'Dm Sans'}
              fontSize={{ base: '4xl', sm: '6xl', md: '6xl' }}
              lineHeight={'110%'}
            >
              PROJECT PAGE IN CONSTRUCTION...

            </Heading>
            <Heading
              fontWeight={600}
              fontFamily={'Dm Sans'}
              fontSize={{ base: '4xl', sm: '6xl', md: '6xl' }}
              lineHeight={'110%'}
            >
              👷‍♂️🚧🏗️

            </Heading>

            <Heading
              fontWeight={600}
              fontFamily={'Dm Sans'}
              fontSize={{ base: '4xl', sm: '6xl', md: '6xl' }}
              lineHeight={'110%'}
            >
              IM WORKING ON IT!

            </Heading>

          </Stack>
        </Container>
      </Box>
    </SlideFade>
  )
}

export default Projects
