import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import useAuth from '../../hooks/useAuth';
import logo from '/MyStudy.png';

export default function Signup() {
  const [username, setUsername] = useState<string>('');
  const [mail, setMail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { isLoading, authenticated, signup, error, success } = useAuth();
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
  }, []);

  const submitHandler = async () => {
    await signup(username, mail, password);
  };

  return (
    <Flex justifyContent={'center'} alignItems={'center'} width={'100vw'} height={'100vh'}>
      <Card width={'lg'} padding={'4'} borderRadius={'1rem'} boxShadow={'xl'}>
        <Flex justifyContent={'center'}>
          <img src={logo} alt='logo' width={'30%'} />
        </Flex>
        <CardHeader fontSize={'3xl'} textAlign={'center'}>
          MyStudy Signup
        </CardHeader>
        <Form onSubmit={submitHandler}>
          <CardBody>
            <VStack justifyContent={'center'}>
              <FormControl isInvalid={error ? true : false}>
                <FormControl id='username' isRequired>
                  <FormLabel>Username</FormLabel>
                  <Input
                    value={username}
                    placeholder='Username'
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </FormControl>
                <Spacer height={'1rem'} />
                <FormControl id='email' isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    value={mail}
                    placeholder='Email'
                    onChange={(e) => setMail(e.target.value)}
                  />
                </FormControl>
                <Spacer height={'1rem'} />
                <FormControl id='password' isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type='password'
                    value={password}
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormControl>
                <Spacer height={'1rem'} />
                <FormErrorMessage
                  fontSize={'md'}
                  maxWidth={'fit-content'}
                  padding={'0.5rem'}
                  rounded={'base'}
                  bg={'red.100'}
                >
                  {error}
                </FormErrorMessage>
                {success && (
                  <Text fontSize={'md'} color={'green.500'} p='1rem'>
                    Successfully registered!
                  </Text>
                )}
              </FormControl>
            </VStack>
          </CardBody>
          <CardFooter gap={'1rem'}>
            <Button
              isLoading={isLoading}
              type='submit'
              colorScheme='blue'
              variant='solid'
              size={'md'}
              width={'50%'}
            >
              Signup
            </Button>
            <Button
              variant={'outline'}
              size={'md'}
              width={'50%'}
              onClick={() => navigate('/login')}
            >
              Login
            </Button>
          </CardFooter>
        </Form>
      </Card>
    </Flex>
  );
}
