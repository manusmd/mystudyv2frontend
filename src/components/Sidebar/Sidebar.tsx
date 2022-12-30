import { Flex, IconButton } from '@chakra-ui/react';
import { useState } from 'react';
import { FiCalendar, FiHome, FiMenu } from 'react-icons/fi';
import { GiTeacher } from 'react-icons/gi';
import { IoMdSchool } from 'react-icons/io';
import { GrUserWorker } from 'react-icons/gr';
import SidebarItem from './SidebarItem';

export default function Sidebar() {
  const [navSize, changeNavSize] = useState<'small' | 'large'>('large');
  return (
    <Flex
      pos='sticky'
      h='92vh'
      boxShadow='0 4px 12px 0 rgba(0,0,0,0.05)'
      w={navSize == 'small' ? '75px' : '300px'}
      flexDir='column'
      justifyContent='space-between'
    >
      <Flex p='13px' flexDir='column' alignItems='flex-start' as='nav'>
        <IconButton
          style={{
            outline: 'none',
            border: 'none',
          }}
          size='lg'
          background='none'
          _hover={{
            outline: 'none',
            border: 'none',
            bg: 'gray.100',
          }}
          icon={<FiMenu />}
          aria-label={'Icon'}
          onClick={() => {
            if (navSize === 'large') {
              changeNavSize('small');
            } else {
              changeNavSize('large');
            }
          }}
        />
        <SidebarItem navSize={navSize} icon={FiHome} title='Dashboard' />
        <SidebarItem navSize={navSize} icon={FiCalendar} title='Event Plan' active />
        <SidebarItem navSize={navSize} icon={GrUserWorker} title='Employees' />
        <SidebarItem navSize={navSize} icon={GiTeacher} title='Teachers' />
        <SidebarItem navSize={navSize} icon={IoMdSchool} title='Students' />
      </Flex>
    </Flex>
  );
}
