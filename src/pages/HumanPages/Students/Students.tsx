import { Box, Spacer, useDisclosure } from '@chakra-ui/react';
import { DataTable } from '@saas-ui/react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Page from '../../../components/Page/Page';
import { useStudents } from '../../../hooks/useStudents';
import { getStudents } from '../../../utils/api';
import HumanHeader from '../HumanHeader';
import StudentModal from './StudentModal';
import { columns } from './TableColumns';
export default function Students() {
  const { students, filter, deleteStudent } = useStudents();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [actionActive, setActionActive] = useState(false);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const query = useQuery('students', getStudents);

  return (
    <Page title='Students'>
      <Box overflowX={'auto'}>
        <HumanHeader
          actionActive={actionActive}
          filter={filter}
          onOpen={onOpen}
          resource='Student'
          modal={<StudentModal isOpen={isOpen} onClose={onClose} />}
          selectedRows={selectedRows}
          deleteHandler={deleteStudent}
          resourceData={students}
        />

        <Spacer h={'1rem'} />
        <DataTable
          isSelectable
          isSortable
          columns={columns}
          data={query.isLoading ? [] : students}
          onSelectedRowsChange={(rows) => {
            if (rows.length === 0) setActionActive(false);
            else {
              setActionActive(true);
              setSelectedRows(rows);
            }
          }}
        />
      </Box>
    </Page>
  );
}
