import { apiClient } from '../../../lib/axios';

export interface Todo {
  id: number;
  content: string;
  completed: boolean;
  createdAt: Date;
}
interface StrApi_Todo {
  id: number;
  attributes: {
    content: string;
    completed: boolean;
    createdAt: Date;
  };
}
export const findTodos = async (): Promise<Todo[]> => {
  const result = await apiClient.get<StrApi_Todo[]>('/todos');

  return result.data.map((todo) => {
    return { id: todo.id, ...todo.attributes };
  });
};
