import { Flex, Heading, Spacer } from '@chakra-ui/react';
import Logo from '/MyStudy_small.png';
import styles from './styles/Topbar.module.css';
import Persona from './Persona';

export default function Topbar() {
  return (
    <Flex className={styles.container}>
      <img src={Logo} alt='MyStudy Logo' className={styles.logo} />
      <Heading size={'md'}>MyStudy</Heading>
      <Spacer />
      <Persona />
    </Flex>
  );
}
