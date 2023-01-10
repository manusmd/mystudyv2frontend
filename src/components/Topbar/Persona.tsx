import { Avatar, Menu, MenuButton } from '@chakra-ui/react';
import {
  PersonaContainer,
  PersonaDetails,
  PersonaLabel,
  PersonaSecondaryLabel,
} from '@saas-ui/react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import PersonaDropdown from './PersonaDropdown';

import styles from './styles/Persona.module.css';

export default function Persona() {
  const { user } = useContext(AuthContext);

  let role = '';

  if (user?.roles?.includes('ROLE_ADMIN')) {
    role = 'Admin';
  } else if (user?.roles?.includes('ROLE_MODERATOR')) {
    role = 'Employee';
  } else if (user?.roles?.includes('ROLE_TEACHER')) {
    role = 'Teacher';
  } else if (user?.roles?.includes('ROLE_STUDENT')) {
    role = 'Student';
  }

  return (
    <>
      {user && (
        <PersonaContainer size='sm'>
          <PersonaDetails>
            {role == 'Admin' ? (
              <PersonaLabel className={styles.details}>Admin</PersonaLabel>
            ) : (
              <PersonaLabel
                className={styles.details}
              >{`${user.firstName} ${user.lastName}`}</PersonaLabel>
            )}{' '}
            <PersonaSecondaryLabel>{role}</PersonaSecondaryLabel>
          </PersonaDetails>
          <Menu>
            <MenuButton className={styles.menuButton}>
              {role == 'Admin' ? (
                <Avatar name='Admin' />
              ) : (
                <Avatar name={`${user?.firstName} ${user?.lastName}`} />
              )}
            </MenuButton>
            <PersonaDropdown firstName={role == 'Admin' ? 'Admin' : user.firstName} />
          </Menu>
        </PersonaContainer>
      )}
    </>
  );
}
