import { ReactNode } from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import LogoSmall from './logos/LogoSmall';
import { Link } from 'react-router-dom';

const Links = [
  { key: 'aboutMe', text: 'About Me', link: '/experience' },
  { key: 'project', text: 'Project', link: '/projects' },
  { key: 'contact', text: 'Contact', link: '/contact' },
];

const NavLink = ({ children, props }: { children: ReactNode, props: any }) => (
  <Link to={props.link}>
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Flex bg={useColorModeValue('gray.100', 'gray.900')} justifyContent={'center'} alignItems={'center'} px={4}>
        <Flex w={'3xl'} h={20} textAlign={'center'} justifyContent={'space-between'} alignItems={'center'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Link to="/">
                <LogoSmall />
              </Link>
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((item) => (
                <NavLink key={item.key} props={item}>{item.text}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Flex>
      {isOpen ? (
        <Box bg={useColorModeValue('gray.100', 'gray.900')} pl={4} pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map((item) => (
              <NavLink key={item.key} props={item}>{item.text}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </>
  );
}