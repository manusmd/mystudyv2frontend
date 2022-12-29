import { Avatar, forwardRef, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import {
  PersonaContainer,
  PersonaDetails,
  PersonaLabel,
  PersonaSecondaryLabel,
} from '@saas-ui/react';
import { useRef } from 'react';
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
  } else if (roles.includes('ROLE_TEACHER')) {
    role = 'Teacher';
  } else if (roles.includes('ROLE_STUDENT')) {
    role = 'Student';
  }

  return (
    <PersonaContainer size='sm'>
      <PersonaDetails>
        <PersonaLabel className={styles.details}>{`${firstName} ${lastName}`}</PersonaLabel>
        <PersonaSecondaryLabel>{role}</PersonaSecondaryLabel>
      </PersonaDetails>
      <Menu>
        <MenuButton style={{ all: 'unset' }}>
          <Avatar name={`${firstName} ${lastName}`} />
        </MenuButton>
        <MenuList>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Menu>
    </PersonaContainer>
  );
}
