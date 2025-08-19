import React, { useEffect, useMemo, useState } from 'react';
import '../styles.css';
import { Task, getTasks, createTask, deleteTask, updateTask } from '../api';

type Filter = 'all' | 'completed' | 'pending';

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [filter, setFilter] = useState<Filter>('all');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function refresh() {
    try {
      setLoading(true);
      const data = await getTasks();
      setTasks(data);
      setError(null);
    } catch (e: any) {
      setError(e?.message || 'Failed to fetch tasks');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { refresh(); }, []);

  async function onAdd(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    const newTask = await createTask({ title, description });
    setTasks(prev => [newTask, ...prev]);
    setTitle(''); setDescription('');
  }

  async function onToggle(task: Task) {
    const updated = await updateTask(task._id, { completed: !task.completed });
    setTasks(prev => prev.map(t => t._id === task._id ? updated : t));
  }

  async function onDelete(task: Task) {
    await deleteTask(task._id);
    setTasks(prev => prev.filter(t => t._id !== task._id));
  }

  const filtered = useMemo(() => {
    if (filter === 'all') return tasks;
    if (filter === 'completed') return tasks.filter(t => t.completed);
    return tasks.filter(t => !t.completed);
  }, [tasks, filter]);

  return (
    <div className="container">
      <h1>To-Do App <span className="badge">NestJS + React</span></h1>
      <small className="mono">API: {import.meta.env.VITE_API_BASE || 'backend'}</small>
      <form onSubmit={onAdd} style={{ marginTop: 12 }}>
        <div className="row">
          <input placeholder="Task title *" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="row">
          <textarea placeholder="Description (optional)" value={description} onChange={e => setDescription(e.target.value)} rows={3} />
        </div>
        <div className="row" style={{ justifyContent: 'space-between' }}>
          <button type="submit">Add Task</button>
          <div className="toolbar">
            <label>Filter:</label>
            <select value={filter} onChange={e => setFilter(e.target.value as Filter)}>
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
            </select>
            <button type="button" onClick={refresh}>Refresh</button>
          </div>
        </div>
      </form>
      <hr />
      {loading && <p>Loading tasks...</p>}
      {error && <p style={{ color: 'tomato' }}>{error}</p>}
      <div style={{ display: 'grid', gap: 10 }}>
        {filtered.map(task => (
          <div key={task._id} className={['task', task.completed ? 'done' : ''].join(' ')}>
            <input type="checkbox" checked={task.completed} onChange={() => onToggle(task)} style={{ marginTop: 4 }} />
            <div style={{ flex: 1 }}>
              <strong>{task.title}</strong>
              {task.description && <div style={{ opacity: 0.8 }}>{task.description}</div>}
              <small className="mono">id: {task._id}</small>
            </div>
            <button onClick={() => onDelete(task)}>Delete</button>
          </div>
        ))}
        {!loading && filtered.length === 0 && <p>No tasks yet. Add one above!</p>}
      </div>
    </div>
  );
}
