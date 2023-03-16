import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Image,
  Tag,
  StackProps,
} from '@chakra-ui/react';

const CareerCard = (props: any) => {
  const {
    id,
    companyName,
    position,
    dateStartEnd,
    techStack,
    companyWebsite,
    companyLogo,
    alt,
    isCurrentCompany,
    padding
  } = props;

  return (
    <Box w={'100%'}>
      <Box
        key={id}
        px={4}
        py={5}
        position="relative"
        w={'auto'}
      >
        <Flex justifyContent="space-between">
          <Flex>
            <Flex boxShadow='xs' p={'2'} h={20} rounded='md' bg='white'>
              <Image
                borderRadius={5}
                w={20}
                bg={'white'}
                objectFit="contain"
                src={companyLogo}
                alt={alt}
              />
            </Flex>
            <Stack spacing={2} pl={3} align="left">
              <Heading fontSize="xl">
                {companyName}
              </Heading>
              <Heading fontSize="sm">
                {position}
              </Heading>
              <Tags skills={techStack} display={['none', 'none', 'flex', 'flex']} />
              <Text fontSize={14} color="gray.400" display={['flex', 'flex', 'none', 'none']}>
                {dateStartEnd}
              </Text>
            </Stack>
          </Flex>
          <Stack display={['none', 'none', 'flex', 'flex']}>
            <Text fontSize={14} color="gray.400">
              {dateStartEnd}
            </Text>
          </Stack>
        </Flex>

        <Tags skills={techStack} display={['flex', 'flex', 'none', 'none']} />

      </Box>
    </Box>
  );
};

interface TagsProps extends StackProps {
  skills: string[];
}

const Tags = ({ skills, ...props }: TagsProps) => {
  return (

    <Flex maxW={'md'} spacing={1} mt={3} isInline alignItems="center" flexWrap="wrap" {...props}>
      {skills.map((skill) => (
        <Tag key={skill} m="2px" size="sm">
          {skill}
        </Tag>
      ))}
    </Flex>
  );
};

export default CareerCard;