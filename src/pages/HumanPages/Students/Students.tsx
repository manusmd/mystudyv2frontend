import { useDisclosure } from '@chakra-ui/react';
import Page from '../../../components/Page/Page';
import { useStudents } from '../../../hooks/useStudents';
import HumanPage from '../HumanPage';
import StudentModal from './StudentModal';
import { columns } from './TableColumns';

export default function Students() {
  const { students, filter, deleteStudent, isLoading } = useStudents();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Page title='Students'>
      <HumanPage
        data={students}
        isLoading={isLoading}
        columns={columns}
        filter={filter}
        deleteHandler={deleteStudent}
        resource='Student'
        modal={<StudentModal isOpen={isOpen} onClose={onClose} />}
        onModalOpen={onOpen}
      />
    </Page>
  );
}
