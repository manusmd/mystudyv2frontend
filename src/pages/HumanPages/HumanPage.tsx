import { Box, Spacer, useDisclosure } from '@chakra-ui/react';
import { Column, DataTable } from '@saas-ui/react';
import { useState } from 'react';
import { EmployeeType, StudentType, TeacherType } from '../../types/UserTypes';
import HumanHeader from './HumanHeader';

type HumanPageProps = {
  data: StudentType[] | TeacherType[] | EmployeeType[];
  isLoading: boolean;
  columns: Column<any>[];
  filter: (value: string) => void;
  deleteHandler: (id: string) => void;
  resource: 'Student' | 'Teacher' | 'Employee';
  modal: JSX.Element;
  onModalOpen: () => void;
};

export default function HumanPage({
  data,
  isLoading,
  columns,
  filter,
  deleteHandler,
  resource,
  modal,
  onModalOpen,
}: HumanPageProps) {
  const [actionActive, setActionActive] = useState(false);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  return (
    <Box overflowX={'auto'}>
      <HumanHeader
        actionActive={actionActive}
        filter={filter}
        onOpen={onModalOpen}
        resource={resource}
        modal={modal}
        selectedRows={selectedRows}
        deleteHandler={deleteHandler}
        resourceData={data}
      />

      <Spacer h={'1rem'} />
      <DataTable
        isSelectable
        isSortable
        columns={columns}
        data={isLoading ? [] : data}
        onSelectedRowsChange={(rows) => {
          if (rows.length === 0) setActionActive(false);
          else {
            setActionActive(true);
            setSelectedRows(rows);
          }
        }}
      />
    </Box>
  );
}
