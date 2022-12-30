import { Flex, Heading, Spacer } from '@chakra-ui/react';
import Logo from '/MyStudy_small.png';
import styles from './styles/Topbar.module.css';
import Persona from './Persona';
import useUser from '../../hooks/useUser';

export default function Topbar() {
  const { user } = useUser();
  return (
    <Flex className={styles.container}>
      <img src={Logo} alt='MyStudy Logo' className={styles.logo} />
      <Heading size={'md'}>MyStudy</Heading>
      <Spacer />
      {user && <Persona firstName={user.firstName} lastName={user.lastName} roles={user.roles} />}
    </Flex>
  );
}
