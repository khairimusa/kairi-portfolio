import {
  Box,
  Container,
  Stack,
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
  Button
} from "@chakra-ui/react"
import { TiBriefcase } from "react-icons/ti";
import appasia from "../assets/appasia.png";
import dexlabs from "../assets/dexlabs.svg";
import kerrylogistics from "../assets/kerrylogistics.svg";
import capitala from "../assets/capitala.png";
import thetaservicepartner from "../assets/thetaservicepartner.png";
import uitm from "../assets/uitm.png";
import unikllogo from "../assets/unikllogo.png";
import { useState, useEffect } from "react";
import { FaGraduationCap } from "react-icons/fa";

const Experience = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
  }, [load])

  return (
    <SlideFade in={load} offsetY={'100px'}>
      <Box p={4} h='auto' >

        <Container alignContent={'center'}>

          <Heading
            fontWeight={600}
            fontSize={50}
            lineHeight={'110%'}
            pb={10}
          >
            <Icon as={TiBriefcase} pt={4} /> Career

          </Heading>

          <SimpleGrid columns={{ sm: 1, md: 2, lg: 2 }} spacing={10}>
            <Card position={'relative'}>
              <Image
                borderTopRadius={5}
                objectFit='contain'
                w={'auto'}
                p={0}
                height={200}
                src={capitala}
                backgroundColor={'white'}
              />
              <CardHeader>
                <Flex justify={'space-between'} flexDirection={'column'}>
                  <Badge position={'absolute'} left={2} top={2} variant='solid' colorScheme='green'>Current</Badge>
                  <Box>
                    <Heading size='lg'>Capital A</Heading>
                    <Text>Software Engineer I</Text>
                  </Box>
                  <Box>
                    <Text>Dec 22' - Present</Text>
                  </Box>
                </Flex>
              </CardHeader>
              <CardBody>
                <Flex gap={2} justifyContent={'space'} wrap={'wrap'}>
                  <Badge>React</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>Flutter</Badge>
                  <Badge>GraphQL</Badge>
                </Flex>
              </CardBody>
              <CardFooter>
                <Button onClick={() => parent.open('https://www.capitala.com/')}>Details</Button>
              </CardFooter>
            </Card>

            <Card>
              <Image
                borderTopRadius={5}
                objectFit='contain'
                w={'auto'}
                height={200}
                p={10}
                src={dexlabs}
                backgroundColor={'white'}
              />
              <CardHeader>
                <Flex justify={'space-between'} flexDirection={'column'}>
                  <Box>
                    <Heading size='lg'>Dex Labs</Heading>
                    <Text>Software Developer</Text>
                  </Box>
                  <Box>
                    <Text>Feb 22' - Dec 22'</Text>
                  </Box>
                </Flex>
              </CardHeader>
              <CardBody>
                <Flex gap={2} justifyContent={'space'} wrap={'wrap'}>
                  <Badge>React</Badge>
                  <Badge>Express.js</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>Unity AR</Badge>
                </Flex>
              </CardBody>

              <CardFooter>
                <Button onClick={() => parent.open('https://dex-labs.com/')}>Details</Button>
              </CardFooter>
            </Card>

            <Card>
              <Image
                borderTopRadius={5}
                objectFit='contain'
                w={'auto'}
                height={200}
                p={10}
                src={appasia}
                backgroundColor={'white'}
              />
              <CardHeader>
                <Flex justify={'space-between'} flexDirection={'column'}>
                  <Box>
                    <Heading size='lg'>Appasia</Heading>
                    <Text>Web Application Developer</Text>
                  </Box>
                  <Box>
                    <Text>Aug 21' - Jan 22'</Text>
                  </Box>
                </Flex>
              </CardHeader>
              <CardBody>
                <Flex gap={2} justifyContent={'space'} wrap={'wrap'}>
                  <Badge>Angular</Badge>
                  <Badge>Laravel</Badge>
                  <Badge>PHP</Badge>
                  <Badge>MYSQL</Badge>
                </Flex>
              </CardBody>

              <CardFooter>
                <Button onClick={() => parent.open('https://www.appasia.com/')}>Details</Button>
              </CardFooter>
            </Card>

            <Card>
              <Image
                borderTopRadius={5}
                objectFit='contain'
                w={'auto'}
                height={200}
                p={10}
                src={kerrylogistics}
                backgroundColor={'white'}
              />
              <CardHeader>
                <Flex justify={'space-between'} flexDirection={'column'}>
                  <Box>
                    <Heading size='lg'>Kerry Logistics</Heading>
                    <Text>Junior Software Engineer</Text>
                  </Box>
                  <Box>
                    <Text>July 20' - July 21'</Text>
                  </Box>
                </Flex>
              </CardHeader>
              <CardBody>
                <Flex gap={2} justifyContent={'space'} wrap={'wrap'}>
                  <Badge>Angular</Badge>
                  <Badge>ASP.Net Core 5</Badge>
                  <Badge>MSSQL</Badge>
                  <Badge>GOLANG</Badge>
                  <Badge>Docker</Badge>
                  <Badge>PostgreSQL</Badge>
                  <Badge>Redis</Badge>
                  <Badge>Rabbit MQ</Badge>
                </Flex>
              </CardBody>

              <CardFooter>
                <Button onClick={() => parent.open('https://www.kerrylogistics.com/')}>Details</Button>
              </CardFooter>
            </Card>

            <Card>
              <Image
                borderTopRadius={5}
                objectFit='contain'
                w={'auto'}
                height={200}
                p={10}
                src={thetaservicepartner}
                backgroundColor={'white'}
              />
              <CardHeader>
                <Flex justify={'space-between'} flexDirection={'column'}>
                  <Box>
                    <Heading size='lg'>Theta Service Partner</Heading>
                    <Text>Software Engineer Intern</Text>
                  </Box>
                  <Box>
                    <Text>Jan 20' - May 20'</Text>
                  </Box>
                </Flex>
              </CardHeader>
              <CardBody>
                <Flex gap={2} justifyContent={'space'} wrap={'wrap'}>
                  <Badge>Angular</Badge>
                  <Badge>Java</Badge>
                  <Badge>oracledb</Badge>
                  <Badge>spring mvc</Badge>
                </Flex>
              </CardBody>

              <CardFooter>
                <Button onClick={() => parent.open('https://www.thetasp.com/')}>Details</Button>
              </CardFooter>
            </Card>

          </SimpleGrid>

        </Container>

        <Container pt={10} alignContent={'center'}>

          <Heading
            fontWeight={600}
            fontSize={50}
            lineHeight={'110%'}
            pb={10}
          >
            <Icon as={FaGraduationCap} pt={4} /> Education

          </Heading>

          <SimpleGrid columns={{ sm: 1, md: 2, lg: 2 }} spacing={10}>
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

          </SimpleGrid>

        </Container>
      </Box>
    </SlideFade >
  )
}

export default Experience
