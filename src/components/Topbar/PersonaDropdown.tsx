import { Flex, MenuDivider, MenuItem, MenuList, Text } from '@chakra-ui/react';
import { MdWavingHand } from 'react-icons/md';
import { AiOutlineLogout } from 'react-icons/ai';
import styles from './styles/PersonaDropdown.module.css';
import useLogin from '../../hooks/useLogin';
import { useNavigate } from 'react-router-dom';

type PersonaDropdownProps = {
  firstName: string;
};

export default function PersonaDropdown({ firstName }: PersonaDropdownProps) {
  const { logout } = useLogin();
  const navigate = useNavigate();

  const logoutHandler = () => {
    logout();
    navigate('/login', { replace: true });
  };

  return (
    <MenuList>
      <Flex flexDirection={'row'} alignItems={'center'} gap={'1rem'} paddingLeft={'1rem'}>
        <MdWavingHand />
        <Text textAlign={'center'}>{`Hi, ${firstName}`}</Text>
      </Flex>
      <MenuDivider />
      <MenuItem className={styles.menuItem} icon={<AiOutlineLogout />} onClick={logoutHandler}>
        Logout
      </MenuItem>
    </MenuList>
  );
}
