import { Flex, FormControl, FormLabel, Input, Spacer, VStack } from '@chakra-ui/react';
import { Button, Card, CardBody, CardFooter, CardTitle, Form } from '@saas-ui/react';
import logo from '/MyStudy.png';
import { useEffect, useState } from 'react';
import useLogin from '../../hooks/useLogin';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { login, success, isLoading } = useLogin();
  const navigate = useNavigate();

  useEffect(() => {
    if (success) navigate('/');
  }, [success]);

  const submitHandler = () => {
    login(username, password);
  };

  return (
    <Flex justifyContent={'center'} alignItems={'center'} width={'100vw'} height={'100vh'}>
      <Card width={'lg'} padding={'4'} borderRadius={'1rem'} boxShadow={'xl'}>
        <Flex justifyContent={'center'}>
          <img src={logo} alt='logo' width={'30%'} />
        </Flex>
        <CardTitle fontSize={'3xl'} textAlign={'center'}>
          Welcome to MyStudy
        </CardTitle>
        <Form onSubmit={submitHandler}>
          <CardBody>
            <VStack spacing={'5'} justifyContent={'center'}>
              <FormControl id='email' isRequired>
                <FormLabel>Username</FormLabel>
                <Input
                  value={username}
                  placeholder={'Username'}
                  onChange={(e) => setUsername(e.target.value)}
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
            <Button
              isLoading={isLoading}
              type={'submit'}
              colorScheme={'blue'}
              variant={'solid'}
              size={'md'}
              width={'50%'}
            >
              Login
            </Button>
            <Spacer />
            <Button variant={'secondary'} size={'md'} width={'50%'}>
              Sign Up
            </Button>
          </CardFooter>
        </Form>
      </Card>
    </Flex>
  );
}
