import { Flex, Icon, Link, Menu, MenuButton, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';

type SidebarItemProps = {
  navSize: 'small' | 'large';
  icon: IconType;
  title: string;
  active?: boolean;
};

export default function SidebarItem({ navSize, icon, title, active }: SidebarItemProps) {
  return (
    <Flex mt='15px' flexDir='column' w='100%'>
      <Menu>
        <Link
          backgroundColor={active ? 'blue.100' : 'none'}
          p={2.5}
          borderRadius={8}
          _hover={{ textDecor: 'none', backgroundColor: 'blue.50' }}
          w={'100%'}
        >
          <MenuButton style={{ all: 'unset' }}>
            <Flex alignItems={'center'}>
              <Icon as={icon} fontSize='xl' color={active ? '#82AAAD' : 'gray.500'} />
              <Text ml={5} display={navSize == 'small' ? 'none' : 'flex'}>
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
}
