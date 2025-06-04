import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTaskContext } from '../context/TaskContext';
import { Task } from '../types/task';
import { v4 as uuidv4 } from 'uuid';

export const CreateTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [errors, setErrors] = useState<{ title?: string; description?: string; dueDate?: string }>({});
  const { addTask } = useTaskContext();
  const navigate = useNavigate();

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!title.trim()) newErrors.title = 'Title is required';
    if (!description.trim()) newErrors.description = 'Description is required';
    if (!dueDate) newErrors.dueDate = 'Due date is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const newTask: Task = {
      id: uuidv4(),
      title,
      description,
      dueDate,
      completed: false,
    };
    addTask(newTask);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '1rem' }}>Create New Task</h1>

      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
        style={{ display: 'block', marginBottom: '0.5rem', padding: '0.5rem' }}
      />
      {errors.title && <span style={{ color: 'red' }}>{errors.title}</span>}

      <textarea
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Description"
        style={{ display: 'block', marginBottom: '0.5rem', padding: '0.5rem' }}
      />
      {errors.description && <span style={{ color: 'red' }}>{errors.description}</span>}

      <input
        type="date"
        value={dueDate}
        onChange={e => setDueDate(e.target.value)}
        style={{ display: 'block', marginBottom: '0.5rem', padding: '0.5rem' }}
      />
      {errors.dueDate && <span style={{ color: 'red' }}>{errors.dueDate}</span>}

      <button type="submit" style={{ marginTop: '1rem' }}>Create Task</button>
    </form>
  );
};
