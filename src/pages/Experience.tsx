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
  Flex
} from "@chakra-ui/react"
import { TiBriefcase } from "react-icons/ti";
import appasia from "../assets/appasia.png";
import dexlabs from "../assets/dexlabs.svg";
import kerrylogistics from "../assets/kerrylogistics.svg";
import capitala from "../assets/capitala.png";
import thetaservicepartner from "../assets/thetaservicepartner.png";
import { useState, useEffect } from "react";

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
            fontFamily={'Dm Sans'}
            fontSize={50}
            lineHeight={'110%'}
            pb={10}
          >
            <Icon as={TiBriefcase} pt={4} /> Career

          </Heading>

          <SimpleGrid columns={1} spacing={10}>
            <Card>
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
                <Flex fontFamily={'Dm Sans'} justify={'space-between'}>
                  <Box>
                    <Heading size='md'>Capital A Berhad</Heading>
                    <Text>Software Engineer I</Text>
                  </Box>
                  <Box>
                    <Text>Dec 2022-Present</Text>
                  </Box>

                </Flex>
              </CardHeader>
              <CardBody>
                <Stack direction={{ sm: 'column', md: 'row', lg: 'row' }} textAlign={'center'}>
                  <Badge>React</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>Flutter</Badge>
                  <Badge>GraphQL</Badge>
                </Stack>
              </CardBody>
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
                <Flex fontFamily={'Dm Sans'} justify={'space-between'}>
                  <Box>
                    <Heading size='md'>Dex Labs Sdn Bhd</Heading>
                    <Text>Software Developer</Text>
                  </Box>
                  <Box>
                    <Text>Feb 2022 - Dec 2022</Text>
                  </Box>

                </Flex>
              </CardHeader>
              <CardBody>
                <Stack direction={{ sm: 'column', md: 'row', lg: 'row' }} textAlign={'center'}>
                  <Badge>React</Badge>
                  <Badge>Express.js</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>Unity AR</Badge>
                </Stack>
              </CardBody>
            </Card>

            <Card>
              <Image
                borderTopRadius={5}
                objectFit='contain'
                w={'auto'}
                p={5}
                height={200}
                src={appasia}
                backgroundColor={'white'}
              />
              <CardHeader>
                <Flex fontFamily={'Dm Sans'} justify={'space-between'}>
                  <Box>
                    <Heading size='md'>Appasia Berhad</Heading>
                    <Text>Web Application Developer</Text>
                  </Box>
                  <Box>
                    <Text>July 2021 - Jan 2022</Text>
                  </Box>

                </Flex>
              </CardHeader>
              <CardBody>
                <Stack direction={{ sm: 'column', md: 'row', lg: 'row' }} textAlign={'center'}>
                  <Badge>Angular</Badge>
                  <Badge>PHP Laravel</Badge>
                  <Badge>MySQL</Badge>
                </Stack>
              </CardBody>
            </Card>

            <Card>
              <Image
                borderTopRadius={5}
                objectFit='contain'
                w={'auto'}
                height={200}
                padding={10}
                src={kerrylogistics}
                backgroundColor={'white'}
              />
              <CardHeader>
                <Flex fontFamily={'Dm Sans'} justify={'space-between'}>
                  <Box>
                    <Heading size='md'>Kerry Logistics</Heading>
                    <Text>Junior Software Engineer</Text>
                  </Box>
                  <Box>
                    <Text>July 2020 - July 2021</Text>
                  </Box>

                </Flex>
              </CardHeader>
              <CardBody>
                <Stack direction={{ sm: 'column', md: 'row', lg: 'row' }} textAlign={'center'}>
                  <Badge>Angular</Badge>
                  <Badge>PHP Laravel</Badge>
                  <Badge>MySQL</Badge>
                </Stack>
              </CardBody>
            </Card>

            <Card>
              <Image
                borderTopRadius={5}
                objectFit='contain'
                w={'auto'}
                p={5}
                height={200}
                src={thetaservicepartner}
                backgroundColor={'white'}
              />
              <CardHeader>
                <Flex fontFamily={'Dm Sans'} justify={'space-between'}>
                  <Box>
                    <Heading size='md'>Theta Service Partner Sdn Bhd</Heading>
                    <Text>Software Engineer Intern</Text>
                  </Box>
                  <Box>
                    <Text>Jan 2020 - May 2020</Text>
                  </Box>

                </Flex>
              </CardHeader>
              <CardBody>
                <Stack direction={{ sm: 'column', md: 'row', lg: 'row' }} textAlign={'center'}>
                  <Badge>Angular</Badge>
                  <Badge>Sring MVC</Badge>
                  <Badge>Oracle DB</Badge>
                </Stack>
              </CardBody>
            </Card>

          </SimpleGrid>

        </Container>
      </Box>
    </SlideFade >
  )
}

export default Experience
