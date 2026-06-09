import { useState } from 'react'

export default function TodoForm({ onAdd, errors }) {
    const [title, setTitle] = useState('')
    const [note, setNote] = useState('')
    const [priority, setPriority] = useState('normal')
    const [dueDate, setDueDate] = useState('')

    async function handleSubmit() { 
        const success = await onAdd({ title, note, priority, dueDate: dueDate || null })
        
        if (success) {
            setTitle('')
            setNote('')
            setPriority('normal')
            setDueDate('')
        }
    }
    return (
        <div>
        <input
            type="text"
            placeholder="Task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && <p>{errors.title}</p>}

        <textarea
            placeholder="Note (optional)"
            value={note}
            onChange={(e) => setNote(e.target.value)}
        />

        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="high">High</option>
            <option value="normal">Normal</option>
            <option value="low">Low</option>
        </select>
        {errors.priority && <p>{errors.priority}</p>}

        <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
        />
        {errors.dueDate && <p>{errors.dueDate}</p>}

        <button onClick={handleSubmit}>Add Task</button>
        </div>
    )
}