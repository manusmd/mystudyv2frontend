import { Flex, FormControl, FormLabel, Input, Spacer, VStack } from '@chakra-ui/react';
import { Button, Card, CardBody, CardFooter, CardTitle } from '@saas-ui/react';
import logo from '/MyStudy.png';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return (
    <Flex justifyContent={'center'} alignItems={'center'} width={'100vw'} height={'100vh'}>
      <Card width={'lg'} padding={'4'} borderRadius={'1rem'} boxShadow={'xl'}>
        <Flex justifyContent={'center'}>
          <img src={logo} alt='logo' width={'30%'} />
        </Flex>
        <CardTitle fontSize={'3xl'} textAlign={'center'}>
          Welcome to MyStudy
        </CardTitle>
        <CardBody>
          <VStack spacing={'5'} justifyContent={'center'}>
            <FormControl id='email' isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                value={email}
                placeholder={'Email'}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id='password' isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type={'password'}
                value={password}
                placeholder={'Password'}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
          </VStack>
        </CardBody>
        <CardFooter>
          <Button colorScheme={'blue'} variant={'solid'} size={'md'} width={'50%'}>
            Login
          </Button>
          <Spacer />
          <Button variant={'secondary'} size={'md'} width={'50%'}>
            Sign Up
          </Button>
        </CardFooter>
      </Card>
    </Flex>
  );
}
