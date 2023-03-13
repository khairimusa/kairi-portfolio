import {
  Box,
  Stack,
  VStack,
  Heading,
  Flex,
  Text,
  Image,
  useColorModeValue,
  Container,
  Tag,
  StackProps
} from '@chakra-ui/react';
import appasia from "../assets/appasia.png";
import dexlabs from "../assets/dexlabs.svg";
import kerrylogistics from "../assets/kerrylogistics.svg";
import capitala from "../assets/capitala.png";
import thetaservicepartner from "../assets/thetaservicepartner.png";

const companies = [
  {
    title: 'Capital A',
    alt: 'company image',
    role: 'Software Engineer ',
    skills: ['ruby', 'rails', 'typescript', 'javascript', 'react', 'aws'],
    period: '2019 - Present',
    logo: 'https://images.unsplash.com/photo-1570126618953-d437176e8c79?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80'
  }
];

const CareerCard = () => {
  return (
    <Box w={'100%'}>
      {companies.map(({ title, role, skills, period, logo, alt }, CareerCard) => (
        <Box
          key={CareerCard}
          px={4}
          py={5}
          position="relative"
          w={'auto'}
        >
          <Flex justifyContent="space-between">
            <Flex>
              <Image
                borderRadius={5}
                w={20}
                h={20}
                p={0}
                bg={'white'}
                objectFit="contain"
                fallbackSrc="https://via.placeholder.com/150"
                src={capitala}
                alt={alt}
              />
              <Stack spacing={2} pl={3} align="left">
                <Heading fontSize="xl">
                  {title}
                </Heading>
                <Heading fontSize="sm">
                  {role}
                </Heading>
                <Tags skills={skills} display={['none', 'none', 'flex', 'flex']} />
                <Text fontSize={14} color="gray.400" display={['flex', 'flex', 'none', 'none']}>
                  {period}
                </Text>
              </Stack>
            </Flex>
            <Stack display={['none', 'none', 'flex', 'flex']}>
              <Text fontSize={14} color="gray.400">
                {period}
              </Text>
            </Stack>
          </Flex>

          <Tags skills={skills} display={['flex', 'flex', 'none', 'none']} />

        </Box>
      ))}
    </Box>
  );
};

interface TagsProps extends StackProps {
  skills: string[];
}

const Tags = ({ skills, ...props }: TagsProps) => {
  return (

    <Flex spacing={1} mt={3} isInline alignItems="center" flexWrap="wrap" {...props}>
      {skills.map((skill) => (
        <Tag key={skill} m="2px" size="sm">
          {skill}
        </Tag>
      ))}
    </Flex>
  );
};
export default CareerCard;