import {
  Avatar,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from '@chakra-ui/react';
import {
  PersonaContainer,
  PersonaDetails,
  PersonaLabel,
  PersonaSecondaryLabel,
} from '@saas-ui/react';
import { AiOutlineLogout } from 'react-icons/ai';
import { MdWavingHand } from 'react-icons/md';
import useLogin from '../../hooks/useLogin';
import PersonaDropdown from './PersonaDropdown';

import styles from './styles/Persona.module.css';

type PersonaProps = {
  firstName: string;
  lastName: string;
  roles: string[];
};

export default function Persona({ firstName, lastName, roles }: PersonaProps) {
  let role = '';

  if (roles.includes('ROLE_ADMIN')) {
    role = 'Admin';
  } else if (roles.includes('ROLE_MODERATOR')) {
    role = 'Employee';
  } else if (roles.includes('ROLE_TEACHER')) {
    role = 'Teacher';
  } else if (roles.includes('ROLE_STUDENT')) {
    role = 'Student';
  }

  return (
    <PersonaContainer size='sm'>
      <PersonaDetails>
        {role == 'Admin' ? (
          <PersonaLabel className={styles.details}>Admin</PersonaLabel>
        ) : (
          <PersonaLabel className={styles.details}>{`${firstName} ${lastName}`}</PersonaLabel>
        )}{' '}
        <PersonaSecondaryLabel>{role}</PersonaSecondaryLabel>
      </PersonaDetails>
      <Menu>
        <MenuButton className={styles.menuButton}>
          {role == 'Admin' ? <Avatar name='Admin' /> : <Avatar name={`${firstName} ${lastName}`} />}
        </MenuButton>
        <PersonaDropdown firstName={role == 'Admin' ? 'Admin' : firstName} />
      </Menu>
    </PersonaContainer>
  );
}
