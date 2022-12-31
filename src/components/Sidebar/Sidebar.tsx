import { Box, Flex, IconButton } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { FiCalendar, FiHome, FiMenu } from 'react-icons/fi';
import { GiTeacher } from 'react-icons/gi';
import { IoMdSchool } from 'react-icons/io';
import { GrUserWorker } from 'react-icons/gr';
import SidebarItem from './SidebarItem';
import styles from './styles/Sidebar.module.css';
import { motion, useAnimation } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { isAuthorized } from '../../utils/helper';

export default function Sidebar() {
  const [navSize, changeNavSize] = useState<'small' | 'large'>('large');
  const control = useAnimation();
  const location = useLocation();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (navSize == 'small') {
      control.start({ width: '75px' });
    } else {
      control.start({ width: '200px' });
    }
  }, [navSize]);

  return (
    <Flex
      as={motion.div}
      animate={control}
      pos='sticky'
      h='92vh'
      boxShadow='0 4px 12px 0 rgba(0,0,0,0.05)'
      w={navSize == 'small' ? '75px' : '200px'}
      flexDir='column'
      pt='1rem'
      pl='13.5px'
      pr='13.5px'
      gap='0.5rem'
      alignItems={'flex-start'}
    >
      <Box>
        <IconButton
          className={styles.menuButton}
          aria-label='Menu'
          icon={<FiMenu />}
          onClick={() => changeNavSize(navSize == 'small' ? 'large' : 'small')}
          size='lg'
        />
      </Box>
      {isAuthorized(user, 'dashboard') && (
        <SidebarItem
          navSize={navSize}
          icon={FiHome}
          title='Dashboard'
          path='dashboard'
          active={location.pathname == '/dashboard' && true}
        />
      )}
      {isAuthorized(user, 'events') && (
        <SidebarItem
          navSize={navSize}
          icon={FiCalendar}
          title='Events'
          path='events'
          active={location.pathname == '/events' && true}
        />
      )}
      {isAuthorized(user, 'employees') && (
        <SidebarItem
          navSize={navSize}
          icon={GrUserWorker}
          title='Employees'
          path='employees'
          active={location.pathname == '/employees' && true}
        />
      )}
      {isAuthorized(user, 'teachers') && (
        <SidebarItem
          navSize={navSize}
          icon={GiTeacher}
          title='Teachers'
          path='teachers'
          active={location.pathname == '/teachers' && true}
        />
      )}
      {isAuthorized(user, 'students') && (
        <SidebarItem
          navSize={navSize}
          icon={IoMdSchool}
          title='Students'
          path='students'
          active={location.pathname == '/students' && true}
        />
      )}
    </Flex>
  );
}
