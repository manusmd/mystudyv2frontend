import { Flex, Icon, Link, Menu, MenuButton, Text } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { IconType } from 'react-icons';
import { Link as RouterLink } from 'react-router-dom';

type SidebarItemProps = {
  navSize: 'small' | 'large';
  icon: IconType;
  title: string;
  path: string;
  active?: boolean;
};

export default function SidebarItem({ navSize, icon, title, active, path }: SidebarItemProps) {
  const controlText = useAnimation();
  useEffect(() => {
    if (navSize == 'small') {
      controlText.start({ opacity: 0 });
    } else {
      controlText.start({ opacity: 1, transition: { duration: 0.5 } });
    }
  }, [navSize]);
  return (
    <Flex mt='15px' flexDir='column' w='100%' h='48px'>
      <Menu>
        <Link
          as={RouterLink}
          to={path}
          display='flex'
          backgroundColor={active ? 'blue.100' : 'none'}
          p={2.5}
          borderRadius={8}
          justifyContent={navSize == 'small' ? 'center' : 'flex-start'}
          _hover={{ textDecor: 'none', backgroundColor: 'blue.50', textColor: 'black' }}
          w={'100%'}
          h={'100%'}
        >
          <MenuButton style={{ all: 'unset' }} textAlign='center'>
            <Flex alignItems={'center'} pl={navSize == 'small' ? '0' : '5px'}>
              <Icon as={icon} fontSize='xl' />
              <Text
                as={motion.p}
                animate={controlText}
                ml={5}
                display={navSize == 'small' ? 'none' : 'flex'}
                height='min-content'
              >
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
}
