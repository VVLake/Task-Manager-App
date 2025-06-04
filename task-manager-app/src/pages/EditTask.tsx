import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTaskContext } from '../context/TaskContext';

const EditTask = () => {
  const { id } = useParams<{ id: string }>();
  const { tasks, updateTask } = useTaskContext();
  const task = tasks.find(t => t.id === id);
  const navigate = useNavigate();

  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');
  const [dueDate, setDueDate] = useState(task?.dueDate || '');
  const [completed, setCompleted] = useState(task?.completed || false);
  const [errors, setErrors] = useState<{ title?: string; description?: string; dueDate?: string }>({});

  useEffect(() => {
    if (!task) navigate('/');
  }, [task, navigate]);

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
    if (!task || !validate()) return;
    updateTask({ ...task, title, description, dueDate, completed });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '1rem' }}>Edit Task</h1>

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

      <label style={{ display: 'block', margin: '1rem 0' }}>
        <input
          type="checkbox"
          checked={completed}
          onChange={e => setCompleted(e.target.checked)}
        /> Completed
      </label>

      <button type="submit">Update Task</button>
    </form>
  );
};

export default EditTask;
