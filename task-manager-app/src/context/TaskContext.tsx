import { createContext, useState, useContext, ReactNode } from 'react';
import { Task } from '../types/task';

interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTask: (updatedTask: Task) => void;
  deleteTask: (id: string) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => setTasks([...tasks, task]);

  const updateTask = (updatedTask: Task) =>
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));

  const deleteTask = (id: string) =>
    setTasks(tasks.filter(task => task.id !== id));

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error('useTaskContext must be used within TaskProvider');
  return context;
};
