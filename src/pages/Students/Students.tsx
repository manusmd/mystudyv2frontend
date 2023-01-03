import { Box, Input, Spacer } from '@chakra-ui/react';
import { DataTable } from '@saas-ui/react';
import { ChangeEvent } from 'react';
import { useQuery } from 'react-query';
import Page from '../../components/Page/Page';
import { useStudents } from '../../hooks/useStudents';
import { getStudents } from '../../utils/api';

export default function Students() {
  const { students, filter } = useStudents();
  const query = useQuery('students', getStudents);

  const columns = [
    {
      id: 'firstName',
      Header: 'Firstname',
    },
    {
      id: 'lastName',
      Header: 'Lastname',
    },
    {
      id: 'email',
      Header: 'Email',
    },
    {
      id: 'phone',
      Header: 'Phone',
    },
    {
      id: 'city',
      Header: 'City',
    },
  ];

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      filter(e.target.value);
    }, 500);
  };

  return (
    <Page title='Students'>
      <Box overflowX={'auto'}>
        <Input placeholder='Search' onChange={onSearch} />
        <Spacer h={'1rem'} />
        <DataTable isSortable columns={columns} data={query.isLoading ? [] : students} />
      </Box>
    </Page>
  );
}
