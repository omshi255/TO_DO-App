import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || 'http://localhost:4000',
});

export type Task = {
  _id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export async function getTasks(): Promise<Task[]> {
  const { data } = await api.get('/tasks');
  return data;
}

export async function createTask(payload: Partial<Task>): Promise<Task> {
  const { data } = await api.post('/tasks', payload);
  return data;
}

export async function updateTask(id: string, payload: Partial<Task>): Promise<Task> {
  const { data } = await api.patch(`/tasks/${id}`, payload);
  return data;
}

export async function deleteTask(id: string): Promise<void> {
  await api.delete(`/tasks/${id}`);
}
