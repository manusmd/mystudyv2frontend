export type EmployeeType = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  street: string;
  house: string;
  city: string;
  postcode: string;
  phone: string;
  active: boolean;
  hourlyRate: number;
};

export type TeacherType = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  street: string;
  house: string;
  city: string;
  postcode: string;
  phone: string;
  subjects: string[];
  active: boolean;
  hourlyRate: number;
};

export type StudentType = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  street: string;
  house: string;
  city: string;
  postcode: string;
  phone: string;
  active: boolean;
  balance: number;
};
