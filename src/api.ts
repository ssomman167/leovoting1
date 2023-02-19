import axios from 'axios';
import { Student } from './constants';

const baseURL = 'http://localhost:8080/Students';

export const getStudents = async (): Promise<Student[]> => {
  const response = await axios.get<Student[]>(baseURL);
  return response.data;
};

export const updateStudent = async (student: Student): Promise<void> => {
  const { id } = student;
  let res=await axios.patch(`${baseURL}/${id}`, student);
  return res.data
};

export const postStudent = async (student: Omit<Student, 'id'>): Promise<Student> => {
  const response = await axios.post<Student>(baseURL, student);
  return response.data;
};

export const getTopThree = async (): Promise<Student[]> => {
  const response = await axios.get<Student[]>(`${baseURL}?_sort=vote&_order=desc&_limit=3`);
  return response.data;
};
