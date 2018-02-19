import {StudentType} from './student-type.enum';

export interface Student {
  matricNumber: string;
  name: string;
  address: string;
  contactNumber: string;
  emailAddress: string;
  course: string;
  levelofStudy: number;
  icNumber: string;
  studentType:StudentType;
}
