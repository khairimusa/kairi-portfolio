import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  Avatar,
  Link,
  List,
  ListIcon,
  ListItem,
  Kbd,
  SimpleGrid,
  SlideFade,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { MdSubdirectoryArrowRight } from 'react-icons/md';
import profilePicture from '../assets/profile-pic.png';

const RESUME_PDF_URL = 'https://firebasestorage.googleapis.com/v0/b/kai-portfolio-7c5c4.appspot.com/o/khairi_2023.pdf?alt=media&token=5c399423-5f4e-484d-b996-7a2371b00ffe';

const downloadFile = (url: string) => {
  console.log(url);
  const fileName = url.split('/').pop();
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.setAttribute('download', fileName || '');
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
}

export default function Hero() {

  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
  }, [load])

  return (
    <SlideFade in={load} offsetY={'100px'}>

      <Box minH='calc(100vh)'>

        <Container maxW={'3xl'} alignContent={'center'}>

          <Stack
            as={Box}
            textAlign={'left'}
            justifyContent={'center'}
            spacing={{ base: 8, md: 8 }}
            py={{ base: 5 }}>
            <Avatar
              padding={2}
              backgroundColor={'green.500'}
              size={'xl'}
              src={profilePicture}
            />
            <Heading
              fontWeight={600}
              fontFamily={'Dm Sans'}
              fontSize={{ base: '2xl', sm: '4xl', md: '4xl' }}
              lineHeight={'110%'}>
              Hi, my name is <br />
              <Text as={'span'} color={'green.400'}>
                Mohammad Khairi
              </Text>
            </Heading>
            <Text style={{ hyphens: 'auto' }} fontFamily={'Dm Sans'} fontSize={{ base: 'xl', sm: '2xl', md: '2xl' }}>
              <Text color={'darkgray.500'}>
                I'm a <Text fontWeight={600} fontFamily={'Dm Sans'} as={'span'} color={'green.400'}> Software <span id='text-dev'>Developer</span> </Text>
                based in <Text fontWeight={600} fontFamily={'Dm Sans'} as={'span'} color={'green.400'}>Kuala Lumpur, Malaysia</Text>. Currently, i work for

                <Link href={'https://capitala.com'} target={'_blank'} style={{ textDecoration: 'none' }}>
                  <Text fontWeight={600} fontFamily={'Dm Sans'} as={'span'} color={'green.400'} > AirAsia (Capital A) <sup><Icon as={ExternalLinkIcon} w={{ xs: 2, sm: 3, md: 4 }} h={{ xs: 2, sm: 3, md: 4 }} /></sup></Text>
                </Link>
                . My main focus now is building new features for ikhlas.com for both
                <Link href={'https://ikhlas.com'} target={'_blank'} style={{ textDecoration: 'none' }}>
                  <Text fontWeight={600} fontFamily={'Dm Sans'} as={'span'} color={'green.400'}> Web <sup><Icon as={ExternalLinkIcon} w={{ xs: 2, sm: 3, md: 4 }} h={{ xs: 2, sm: 3, md: 4 }} /></sup> </Text>
                </Link>
                and
                <Link href={'https://apps.apple.com/us/app/ikhlas-your-companion/id1550705035'} target={'_blank'} style={{ textDecoration: 'none' }}>
                  <Text fontWeight={600} fontFamily={'Dm Sans'} as={'span'} color={'green.400'}> Mobile Application <sup><Icon as={ExternalLinkIcon} w={{ xs: 2, sm: 3, md: 4 }} h={{ xs: 2, sm: 3, md: 4 }} /></sup></Text>
                </Link>
                .
              </Text>
            </Text>
            <Text fontFamily={'Dm Sans'} fontSize={{ base: 'xl', sm: '2xl', md: '2xl' }}>
              <Text color={'darkgray.500'}>
                Here are some of the technologies that i have been using lately:
              </Text>
            </Text>

            <SimpleGrid columns={{ base: 1, md: 2 }}>
              <Box height={'auto'}>
                <List spacing={5} pt={5} pb={5} pl={5}>
                  <ListItem>
                    <ListIcon as={MdSubdirectoryArrowRight} color='green.600' />
                    <Kbd padding={2}>Javascript (ES6+)</Kbd>
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdSubdirectoryArrowRight} color='green.600' />
                    <Kbd padding={2}>React</Kbd>
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdSubdirectoryArrowRight} color='green.600' />
                    <Kbd padding={2}>Flutter</Kbd>
                  </ListItem>
                </List>
              </Box>
              <Box height={'auto'}>
                <List spacing={5} pt={5} pb={5} pl={5}>
                  <ListItem>
                    <ListIcon as={MdSubdirectoryArrowRight} color='green.600' />
                    <Kbd padding={2}>Typescript</Kbd>
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdSubdirectoryArrowRight} color='green.600' />
                    <Kbd padding={2}>Next.js</Kbd>
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdSubdirectoryArrowRight} color='green.600' />
                    <Kbd padding={2}>GraphQL</Kbd>
                  </ListItem>
                </List>
              </Box>
            </SimpleGrid>



            <Stack
              direction={'column'}
              align={'left'}
              alignSelf={'left'}
              position={'relative'}>
              <Link
                style={{ textDecoration: 'none', cursor: 'default' }}>
                <Button
                  colorScheme={'green'}
                  bg={'green.400'}
                  rounded={'full'}
                  px={6}
                  _hover={{
                    bg: 'green.500',
                  }}
                  onClick={() => downloadFile(RESUME_PDF_URL)}>
                  Resume
                </Button>
              </Link>
              <Box>
                <Icon
                  as={Arrow}
                  color={useColorModeValue('gray.800', 'gray.300')}
                  w={71}
                  position={'absolute'}
                  left={100}
                  top={'33'}
                />
                <Text
                  fontSize={'md'}
                  fontFamily={'Dm Sans'}
                  position={'absolute'}
                  left={'120px'}
                  top={'12px'}
                  transform={'rotate(30deg)'}>
                  Resume PDF
                </Text>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </SlideFade>

  );
}

const Arrow = createIcon({
  displayName: 'Arrow',
  viewBox: '0 0 72 24',
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
      fill="currentColor"
    />
  ),
});