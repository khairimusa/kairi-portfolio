import { Box, Container, Stack, Heading } from "@chakra-ui/react"

const Experience = () => {
  return (
    <Box p={4} h='calc(100vh)'>

      <Container maxW={'6xl'} alignContent={'center'}>

        <Stack
          as={Box}
          textAlign={'center'}
          justifyContent={'center'}
          spacing={{ base: 8, md: 14 }}
          py={20}
        >

          <Heading
            fontWeight={600}
            fontFamily={'Raleway'}
            fontSize={{ base: '4xl', sm: '6xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            EXPERIENCE PAGE IN CONSTRUCTION...

          </Heading>
          <Heading
            fontWeight={600}
            fontFamily={'Raleway'}
            fontSize={{ base: '4xl', sm: '6xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            👷‍♂️🚧🏗️

          </Heading>

          <Heading
            fontWeight={600}
            fontFamily={'Raleway'}
            fontSize={{ base: '4xl', sm: '6xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            IM WORKING ON IT!

          </Heading>

        </Stack>
      </Container>
    </Box>
  )
}

export default Experience
