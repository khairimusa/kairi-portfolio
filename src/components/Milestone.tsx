import {
  Box,
  chakra,
  HStack,
  Flex,
  useColorModeValue,
  useBreakpointValue,
  Heading,
  Icon
} from '@chakra-ui/react';
import appasia from "../assets/appasia.png";
import dexlabs from "../assets/dexlabs.svg";
import kerrylogistics from "../assets/kerrylogistics.svg";
import capitala from "../assets/capitala.png";
import thetaservicepartner from "../assets/thetaservicepartner.png";
import { TiBriefcase } from 'react-icons/ti';
import CareerCard from './CareerCard';

const milestones = [
  {
    id: 1,
    companyName: 'Capital A',
    position: 'Software Engineer I',
    dateStartEnd: 'Dec 22 ~ Present',
    techStack: ['React', 'Next.js', 'Flutter', 'GraphQL'],
    companyWebsite: 'https://www.capitala.com/',
    companyLogo: capitala,
    alt: 'company image',
    isCurrentCompany: true,
  },
  {
    id: 2,
    companyName: 'Capital A',
    position: 'Software Engineer I',
    dateStartEnd: 'Dec 22 ~ Present',
    techStack: ['React', 'Next.js', 'Flutter', 'GraphQL'],
    companyWebsite: 'https://www.capitala.com/',
    isCurrentCompany: true
  },
  {
    id: 3,
    companyName: 'Capital A',
    position: 'Software Engineer I',
    dateStartEnd: 'Dec 22 ~ Present',
    techStack: ['React', 'Next.js', 'Flutter', 'GraphQL'],
    companyWebsite: 'https://www.capitala.com/',
    isCurrentCompany: true
  },
  {
    id: 4,
    companyName: 'Capital A',
    position: 'Software Engineer I',
    dateStartEnd: 'Dec 22 ~ Present',
    techStack: ['React', 'Next.js', 'Flutter', 'GraphQL'],
    companyWebsite: 'https://www.capitala.com/',
    isCurrentCompany: true
  },
  {
    id: 5,
    companyName: 'Capital A',
    position: 'Software Engineer I',
    dateStartEnd: 'Dec 22 ~ Present',
    techStack: ['React', 'Next.js', 'Flutter', 'GraphQL'],
    companyWebsite: 'https://www.capitala.com/',
    isCurrentCompany: true
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
        pb={2}
      >
        <Icon as={TiBriefcase} pt={4} /> Career
      </Heading>

      {milestones.map((milestone) => (
        <Flex key={milestone.id} mb="10px">
          <LineWithDot />
          <SampleCard {...milestone} />
        </Flex>
      ))}
    </Box>
  );
};

interface CardProps {
  id: number;
  title: string;
  description: string;
  date: string;
}

const SampleCard = (CardProps: any) => {
  return (
    <HStack
      flex={1}
      bg={useColorModeValue('white.600', 'gray.700')}
      border={'1px solid gray'}
      rounded="lg"
      alignItems="left"
      pos="relative"
    >

      <CareerCard {...CardProps} />

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
        height="calc(100% + 10px)"
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