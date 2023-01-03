import { Text } from '@chakra-ui/react';
import Page from '../../components/Page/Page';
import useUser from '../../hooks/useUser';

export default function Dashboard() {
  const { user } = useUser();

  return (
    <Page title={`Hello ${user?.firstName ? user.firstName : ''}`}>
      <Text>Dashboard Content</Text>
    </Page>
  );
}
