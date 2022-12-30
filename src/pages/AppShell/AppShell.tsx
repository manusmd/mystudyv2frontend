import { Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import Topbar from '../../components/Topbar/Topbar';

export default function AppShell() {
  return (
    <>
      <Topbar />
      <Flex as='main' direction='row' w='100%' h='100%' overflow='hidden'>
        <Sidebar />
        <Outlet />
      </Flex>
    </>
  );
}
