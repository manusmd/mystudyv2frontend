import { Text } from '@chakra-ui/react';
import Page from '../Page/Page';

export default function Unauthorized() {
  return (
    <Page title='Unauthorized'>
      <Text>You are not authorized to view this page.</Text>
    </Page>
  );
}
