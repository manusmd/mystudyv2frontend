export interface UserType {
  id: string;
  username: string;
  email: string;
  roles: string[];
}

export interface ResourceUserType {
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
  roles: string[];
}

export interface EmployeeType extends ResourceUserType {
  hourlyRate: number;
}

export interface TeacherType extends ResourceUserType {
  subjects: string[];
  hourlyRate: number;
}

export interface StudentType extends ResourceUserType {
  balance: number;
}
