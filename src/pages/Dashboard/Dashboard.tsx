import { Text } from '@chakra-ui/react';
import { useContext } from 'react';
import Page from '../../components/Page/Page';
import { AuthContext } from '../../context/AuthContext';

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <Page title={`Hello ${user?.firstName ? user.firstName : ''}`}>
      <Text>Dashboard Content</Text>
    </Page>
  );
}
