import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import { ReactNode } from 'react';
import LogoFull from './logos/LogoFull';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        spacing={4}
        justify={'center'}
        align={'center'}>
        {/* <LogoFull /> */}
        <Stack direction={'row'} spacing={6}>
          {/* <Link href={'/'}>About</Link>
          <Link href={'/src/components/WorkInProgress.tsx'}>Experience</Link>
          <Link href={'/src/components/WorkInProgress.tsx'}>Work</Link>
          <Link href={'/src/components/WorkInProgress.tsx'}>Contact</Link> */}
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>© {new Date().getFullYear().toString()} Mohammad Khairi. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Github'} href={'#'}>
              <Link key={'linkedin'} target="_blank" href='https://www.linkedin.com/in/khairimusa/'>
                <FaLinkedin />
              </Link>
            </SocialButton>
            <SocialButton label={'Github'} href={'#'}>
              <Link key={'linkedin'} target="_blank" href='https://github.com/khairimusa'>
                <FaGithub />
              </Link>
            </SocialButton>
            <SocialButton label={'Stackoverflow'} href={'#'}>
              <FaStackOverflow />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}