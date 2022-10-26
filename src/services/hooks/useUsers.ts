import { useQuery } from '@tanstack/react-query';
import { api } from '../api';

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

export async function getUsers(): Promise<User[]> {
  const { data } = await api.get('users');

  console.log(data);

  return data.users;
}

export function useUsers() {
  return useQuery(['users'], getUsers, {
    staleTime: 1000 * 5, // 5 seconds
  });
}
