import {
  Box,
  chakra,
  HStack,
  Flex,
  useColorModeValue,

  Heading,
  Icon,
  useDisclosure,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Link,
  Tooltip,
} from '@chakra-ui/react';
import appasia from "../assets/appasia.png";
import dexlabs from "../assets/dexlabs.svg";
import kerrylogistics from "../assets/kerrylogistics.svg";
import capitala from "../assets/capitala.png";
import thetaservicepartner from "../assets/thetaservicepartner.png";
import CareerCard from './CareerCard';
import { FaBriefcase } from 'react-icons/fa';

const companies = [
  {
    id: 1,
    companyName: 'Capital A',
    position: 'Software Engineer I',
    dateStartEnd: 'Dec 22 ~ Present',
    techStack: ['React', 'Next.js', 'Flutter', 'GraphQL'],
    companyWebsite: 'https://www.capitala.com/',
    companyLogo: capitala,
    alt: 'capitala-logo',
    isCurrentCompany: true,
    padding: 0,
  },
  {
    id: 2,
    companyName: 'Dex Labs',
    position: 'Software Developer',
    dateStartEnd: 'Feb 22 ~ Dec 22',
    techStack: ['Reach', 'Express.js', 'MongoDB', 'Node.js', 'Unity AR'],
    companyWebsite: 'https://dex-labs.com/',
    companyLogo: dexlabs,
    alt: 'dexlabs-logo',
    isCurrentCompany: false,
    padding: 2,
  },
  {
    id: 3,
    companyName: 'Appasia',
    position: 'Web App Developer',
    dateStartEnd: 'Jul 21 ~ Jan 22',
    techStack: ['Angular 8+', 'Laravel', 'PHP', 'MySQL'],
    companyWebsite: 'https://www.appasia.com/',
    companyLogo: appasia,
    alt: 'appasia-logo',
    isCurrentCompany: false,
    padding: 2,
  },
  {
    id: 4,
    companyName: 'Kerry Logistics',
    position: 'Jr. Software Engineer',
    dateStartEnd: 'Jul 20 ~ Jul 21',
    techStack: ['Angular 8+', 'Asp.Net Core 5', 'MSSQL', 'Golang', 'Docker'],
    companyWebsite: 'https://www.linkedin.com/company/kln-services-sdn-bhd/',
    companyLogo: kerrylogistics,
    alt: 'kerrylogistics-logo',
    isCurrentCompany: false,
    padding: 2,
  },
  {
    id: 5,
    companyName: 'Theta Service Partner',
    position: 'Software Engineer Intern',
    dateStartEnd: 'Feb 22 ~ Dec 22',
    techStack: ['Angular 8+', 'Java', 'OracleDB', 'Spring MVC'],
    companyWebsite: 'https://www.thetasp.com/',
    companyLogo: thetaservicepartner,
    alt: 'thetaservicepartner-logo',
    isCurrentCompany: false,
    padding: 2,
  },
];

const Milestones = () => {
  return (
    <Box>
      <Heading
        textAlign={'left'}
        fontWeight={600}
        fontSize={{ sm: 45, md: 50, lg: 50 }}
        lineHeight={'110%'}
        pb={6}
      >
        <Icon as={FaBriefcase} pt={4} /> Career
      </Heading>

      {companies.map((company) => (
        <Link
          href={company.companyWebsite}
          target={'_self'}
          style={{ textDecoration: 'none' }}
        >

          <Tooltip hasArrow label='More info' placement='top'>
            <Flex
              key={company.id}
              cursor={'pointer'}
              mb="25px"
              _hover={{ base: { userSelect: 'none', WebkitTapHighlightColor: 'transparent' }, md: { userSelect: 'none', WebkitTapHighlightColor: 'transparent' }, lg: { userSelect: 'none', transform: 'translateY(-5px)', transition: 'transform 0.3s ease 0s' } }}
              _focus={{ base: { outline: 'none !important' }, md: { outline: 'none !important' }, lg: { outline: 'none !important' } }}
            >
              <LineWithDot />
              <SampleCard {...company} />
            </Flex>
          </Tooltip>
        </Link>
      ))
      }
    </Box >

  );
};

const SampleCard = (props: any) => {
  return (
    <HStack
      flex={1}
      bg={useColorModeValue('white.600', 'gray.700')}
      border={'1px solid gray'}
      rounded="lg"
      alignItems="left"
      pos="relative"
    >

      <CareerCard {...props} />

    </HStack>
  );
};

const LineWithDot = () => {
  return (
    <Flex
      pos="relative"
      alignItems="center"
      mr={{ base: '10px', md: '10px' }}
    >
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 30px)"
        border="1px solid"
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        top="0px"
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
          width="100%"
          height="100%"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          bg={useColorModeValue('gray.600', 'gray.200')}
          borderRadius="100px"
          backgroundImage="none"
          opacity={1}
        >
        </Box>
      </Box>
    </Flex>
  );
};

const EmptyCard = () => {
  return <Box flex={{ base: 0, md: 1 }} p={{ base: 0, md: 6 }} bg="transparent"></Box>;
};

export default Milestones;