import { useQuery } from '@tanstack/react-query';
import { findTodos } from '../api';

export const useTodosQuery = () => {
  return useQuery(['todos'], () => findTodos());
};
