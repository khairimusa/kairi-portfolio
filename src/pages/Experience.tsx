import {
  Box,
  Container,
  Heading,
  SlideFade,
  Card,
  CardBody,
  Image,
  Text,
  Icon,
  Badge,
  CardHeader,
  SimpleGrid,
  Flex,
  CardFooter,
  Button,
  Link
} from "@chakra-ui/react"
import uitm from "../assets/uitm.png";
import unikllogo from "../assets/unikllogo.png";
import { useState, useEffect } from "react";
import { FaGraduationCap } from "react-icons/fa";
import Milestones from "../components/Milestone";

const Experience = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
  }, [load])

  return (
    <SlideFade in={load} offsetY={'100px'}>
      <Box h='auto' >

        <Container maxW={'3xl'} alignContent={'center'}>
          <Milestones />
        </Container>

        <Container mt={10} maxW={'3xl'} alignContent={'center'}>

          <Heading
            fontWeight={600}
            fontSize={50}
            lineHeight={'110%'}
            pb={10}
          >
            <Icon as={FaGraduationCap} pt={4} /> Education

          </Heading>

          <SimpleGrid columns={{ sm: 1, md: 2, lg: 2 }} spacing={10}>
            <Link
              href={'https://www.unikl.edu.my/'}
              target={'_blank'}
              style={{ textDecoration: 'none', cursor: 'pointer' }}
              _hover={{ transform: 'translateY(-5px)', transition: 'transform 0.3s ease 0s' }}
            >
              <Card position={'relative'}>
                <Image
                  borderTopRadius={5}
                  objectFit='contain'
                  w={'auto'}
                  height={200}
                  p={0}
                  src={unikllogo}
                  backgroundColor={'white'}
                />
                <CardHeader>
                  <Flex justify={'space-between'} flexDirection={'column'}>
                    <Box>
                      <Heading size='md'>Universiti Kuala Lumpur</Heading>
                      <Text>Bachelor of IT in Software Engineering</Text>
                    </Box>
                    <Box>
                      <Text>2016 - 2020</Text>
                    </Box>
                  </Flex>
                </CardHeader>
              </Card>
            </Link>

            <Link
              href={'https://www.uitm.edu.my/index.php/ms/'}
              target={'_blank'}
              style={{ textDecoration: 'none', cursor: 'pointer' }}
              _hover={{ transform: 'translateY(-5px)', transition: 'transform 0.3s ease 0s' }}
            >
              <Card>
                <Image
                  borderTopRadius={5}
                  objectFit='contain'
                  w={'auto'}
                  height={200}
                  p={10}
                  src={uitm}
                  backgroundColor={'white'}
                />
                <CardHeader>
                  <Flex justify={'space-between'} flexDirection={'column'}>
                    <Box>
                      <Heading size='md'>Universiti Teknologi Mara</Heading>
                      <Text>Foundation in Engineering</Text>
                    </Box>
                    <Box>
                      <Text>2015 - 2016</Text>
                    </Box>
                  </Flex>
                </CardHeader>
              </Card>
            </Link>
          </SimpleGrid>

        </Container>
        <Box py={20}></Box>
      </Box>
    </SlideFade >
  )
}

export default Experience
