import { Button, Flex, FormControl, FormLabel, Input, Spacer, Text } from '@chakra-ui/react';
import { FormikProps } from 'formik';
import { Key, useEffect } from 'react';
import { StudentType } from '../../types/UserTypes';

type StudentFormProps = {
  formData: FormikProps<StudentType>;
  onClose: () => void;
};

export default function StudentForm({ formData, onClose }: StudentFormProps) {
  useEffect(() => {
    formData.resetForm();
  }, []);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formData.handleSubmit();
    onClose();
  };

  return (
    <form onSubmit={submitHandler}>
      <Flex flexDir='column' gap='1rem' p='1rem'>
        <FormControl id='name'>
          <FormLabel>Name</FormLabel>
          <Flex gap={'1rem'}>
            <Input
              id='firstName'
              value={formData.values.firstName}
              type='text'
              placeholder='first name'
              onChange={formData.handleChange}
              onBlur={formData.handleBlur}
            />
            <Input
              id='lastName'
              value={formData.values.lastName}
              type='text'
              placeholder='last name'
              onChange={formData.handleChange}
              onBlur={formData.handleBlur}
            />
          </Flex>
        </FormControl>
        <FormControl id='email'>
          <FormLabel>Email</FormLabel>
          <Input
            id='email'
            value={formData.values.email}
            type='email'
            placeholder='email'
            onChange={formData.handleChange}
            onBlur={formData.handleBlur}
          />
        </FormControl>
        <FormControl id='address'>
          <FormLabel>Address</FormLabel>
          <Flex gap={'1rem'}>
            <Input
              value={formData.values.street}
              id='street'
              type='text'
              placeholder='street'
              onChange={formData.handleChange}
              onBlur={formData.handleBlur}
            />
            <Input
              value={formData.values.house}
              id='house'
              type='text'
              placeholder='house'
              onChange={formData.handleChange}
              onBlur={formData.handleBlur}
            />
          </Flex>
          <Spacer h={'1rem'} />
          <Flex gap={'1rem'}>
            <Input
              value={formData.values.city}
              id='city'
              type='text'
              placeholder='city'
              onChange={formData.handleChange}
              onBlur={formData.handleBlur}
            />
            <Input
              id='postcode'
              type='text'
              placeholder='postcode'
              value={formData.values.postcode}
              onChange={formData.handleChange}
              onBlur={formData.handleBlur}
            />
          </Flex>
        </FormControl>
        <FormControl id='phone'>
          <FormLabel>Phone</FormLabel>
          <Input
            value={formData.values.phone}
            id='phone'
            type='text'
            placeholder='phone'
            onChange={formData.handleChange}
            onBlur={formData.handleBlur}
          />
        </FormControl>
        <Flex flexDir='column'>
          {Object.keys(formData.errors).map((key: string) => {
            if (formData.touched[key as keyof StudentType]) {
              return (
                <Text
                  fontSize='xs'
                  w='max-content'
                  flexWrap='wrap'
                  color={'red'}
                  p='0.3rem'
                  key={key}
                >
                  {formData.errors[key as keyof StudentType]}
                </Text>
              );
            }
          })}
        </Flex>
        <Button type='submit' colorScheme='blue' mr={3}>
          Add
        </Button>
      </Flex>
    </form>
  );
}
