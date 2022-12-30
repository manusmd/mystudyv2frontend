import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Spacer,
  VStack,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from '@chakra-ui/react';
import logo from '/MyStudy.png';
import { useEffect, useState } from 'react';
import useLogin from '../../hooks/useLogin';
import { Form, useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { login, success, isLoading, error } = useLogin();
  const navigate = useNavigate();

  useEffect(() => {
    if (success) navigate('/dashboard');
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
        <CardHeader fontSize={'3xl'} textAlign={'center'}>
          Welcome to MyStudy
        </CardHeader>
        <Form onSubmit={submitHandler}>
          <CardBody>
            <VStack justifyContent={'center'}>
              <FormControl isInvalid={error ? true : false}>
                <FormControl id='email' isRequired>
                  <FormLabel>Username</FormLabel>
                  <Input
                    value={username}
                    placeholder={'Username'}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </FormControl>
                <Spacer height={'1rem'} />
                <FormControl id='password' isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type={'password'}
                    value={password}
                    placeholder={'Password'}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormControl>
                <FormErrorMessage
                  fontSize={'md'}
                  maxWidth={'fit-content'}
                  padding={'0.5rem'}
                  rounded={'base'}
                  bg={'red.100'}
                >
                  {error}
                </FormErrorMessage>
              </FormControl>
            </VStack>
          </CardBody>
          <CardFooter gap={'1rem'}>
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
            <Button variant={'outline'} size={'md'} width={'50%'}>
              Sign Up
            </Button>
          </CardFooter>
        </Form>
      </Card>
    </Flex>
  );
}
