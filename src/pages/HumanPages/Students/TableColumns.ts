import { Column } from '@saas-ui/data-table';
import { StudentType } from '../../../types/UserTypes';

export const columns: Column<StudentType>[] = [
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
  {
    id: 'balance',
    Header: 'Balance',
  },
];
