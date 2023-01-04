import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useToast,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import StudentForm from './StudentForm';
import * as Yup from 'yup';
import { useStudents } from '../../hooks/useStudents';
import { useEffect } from 'react';

type StudentModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function StudentModal({ isOpen, onClose }: StudentModalProps) {
  const toast = useToast();
  const { addStudent, message } = useStudents();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      street: '',
      house: '',
      city: '',
      postcode: '',
      phone: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Firstname required'),
      lastName: Yup.string().required('Last required'),
      email: Yup.string().email('Invalid email address').required('Email required'),
      street: Yup.string().required('Street required'),
      house: Yup.string().required('House required'),
      city: Yup.string().required('City required'),
      postcode: Yup.string().required('Postcode required'),
      phone: Yup.string().required('Phone required'),
    }),
    onSubmit: (values, { validateForm }) => {
      validateForm(values).then((errors) => {
        if (Object.keys(errors).length === 0) {
          addStudent(values);
          alert(JSON.stringify(values, null, 2));
        }
      });
    },
  });

  useEffect(() => {
    if (message) {
      toast({
        title: message,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    }
  }, [message]);

  console.log({ formik });

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='3xl'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add student</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <StudentForm formData={formik} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
