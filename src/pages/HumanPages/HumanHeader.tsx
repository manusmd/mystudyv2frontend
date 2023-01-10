import { Button, Flex, Input, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { FiChevronDown } from 'react-icons/fi';
import { MdDelete, MdEditAttributes } from 'react-icons/md';
import { UseMutateFunction } from 'react-query';
import { EmployeeType, StudentType, TeacherType } from '../../types/UserTypes';

type HumanHeaderProps = {
  resource: 'Teacher' | 'Student' | 'Employee';
  onOpen: () => void;
  filter: (value: string) => void;
  actionActive: boolean;
  modal: JSX.Element;
  selectedRows: string[];
  deleteHandler: UseMutateFunction<unknown, unknown, string, unknown>;
  resourceData: StudentType[] | TeacherType[] | EmployeeType[];
};

export default function HumanHeader({
  resource,
  onOpen,
  filter,
  actionActive,
  modal,
  selectedRows,
  deleteHandler,
  resourceData,
}: HumanHeaderProps) {
  const onDelete = () => {
    selectedRows.forEach((id) => {
      const userId = resourceData[parseInt(id)].id;
      if (userId) deleteHandler(userId);
    });
  };

  return (
    <Flex gap={'1rem'}>
      <Button
        pl={4}
        pr={4}
        colorScheme={'blue'}
        h='inherit'
        leftIcon={<AddIcon />}
        _focus={{ outline: 'none' }}
        onClick={onOpen}
      >
        Add {resource}
      </Button>
      <Menu>
        <MenuButton
          minW={'90px'}
          as={Button}
          h='inherit'
          rightIcon={<FiChevronDown />}
          disabled={!actionActive}
          _focus={{ outline: 'none' }}
        >
          Actions
        </MenuButton>
        <MenuList>
          <MenuItem _focus={{ outline: 'none' }} icon={<MdEditAttributes />}>
            Edit
          </MenuItem>
          <MenuItem
            _focus={{ outline: 'none' }}
            color='red.600'
            icon={<MdDelete />}
            onClick={onDelete}
          >
            Delete
          </MenuItem>
        </MenuList>
      </Menu>
      {modal}
      <Input placeholder='Search' onChange={(e) => filter(e.target.value)} />
    </Flex>
  );
}
