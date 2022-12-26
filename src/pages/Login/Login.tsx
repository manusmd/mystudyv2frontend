import { Flex, FormControl, FormLabel, Input, Spacer, VStack } from '@chakra-ui/react'
import { Button, Card, CardBody, CardFooter, CardTitle } from '@saas-ui/react'
import logo from '/MyStudy.png'

export default function Login() {
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
              <Input placeholder={'Email'} borderWidth={'thin'} colorScheme={'whiteAlpha'} />
            </FormControl>
            <FormControl id='password' isRequired>
              <FormLabel>Password</FormLabel>
              <Input placeholder={'Email'} borderWidth={'thin'} colorScheme={'whiteAlpha'} />
            </FormControl>
          </VStack>
        </CardBody>
        <CardFooter justifyContent={'space-between'}>
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
  )
}
