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
import { useContext, useEffect, useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { AuthContext } from '../../context/AuthContext';

export default function Login() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { login, isLoading, error, authenticated } = useAuth();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const checkAuth = async () => {
      if (authenticated()) {
        if (user?.roles?.includes('ROLE_STUDENT')) {
          // TODO: navigate to student dashboard
          navigate('/tbd');
        } else navigate('/');
      }
    };
    checkAuth();
  }, [authenticated]);

  const submitHandler = async () => {
    await login(username, password);
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
