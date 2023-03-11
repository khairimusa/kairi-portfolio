import {
  Box,
  Heading,
  Text,
  Container,
  Link,
  Stack,
  Divider,
  Button,
  Flex
} from '@chakra-ui/react'

const NotFound = () => {
  return (

    <Box p={4} h='calc(100vh)' justifyContent={'center'}>

      <Container maxW={{ sm: 'xl', md: '6xl' }}>

        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20 }}
        >

          <Heading
            fontWeight={900}
            fontFamily={'Dm Sans'}
            fontSize={{ sm: '2xl', md: '4xl', lg: '6xl' }}
            lineHeight={'110%'}
          >
            ⚠️ Oops! ⚠️
          </Heading>

          <Heading
            fontWeight={900}
            fontFamily={'Dm Sans'}
            fontSize={{ sm: '2xl', md: '4xl', lg: '6xl' }}
            lineHeight={'110%'}
          >
            🚨🚨 404 - PAGE NOT FOUND 🚨🚨
          </Heading>

          <Heading
            fontWeight={900}
            fontFamily={'Dm Sans'}
            fontSize={{ sm: '2xl', md: '4xl', lg: '6xl' }}
            lineHeight={'110%'}
          >
            GO BACK
          </Heading>

          <Heading
            fontWeight={900}
            fontFamily={'Dm Sans'}
            fontSize={{ sm: '2xl', md: '4xl', lg: '6xl' }}
            lineHeight={'110%'}
          >
            👇
          </Heading>

          <Box>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Button
                colorScheme={'green'}
                bg={'green.400'}
                rounded={'full'}
                fontSize={{ sm: '2xl', md: '4xl', lg: '6xl' }}
                px={8}
                py={{ sm: 5, md: 10 }}
                _hover={{
                  bg: 'green.500',
                }}>
                Return to home
              </Button>
            </Link>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default NotFound
