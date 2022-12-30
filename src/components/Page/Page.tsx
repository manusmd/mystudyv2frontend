import { Box, Divider, Flex, Heading } from '@chakra-ui/react';
import { ReactNode } from 'react';

type PageProps = {
  title: string;
  children: ReactNode;
};
export default function Page({ title, children }: PageProps) {
  return (
    <Flex flexDir='column' pt='1rem' w='100%'>
      <Flex pb='1rem' pl='2rem'>
        <Heading size='lg'>{title}</Heading>
      </Flex>
      <Divider size='xl' />
      <Box p='2rem'>{children}</Box>
    </Flex>
  );
}
