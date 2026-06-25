import { useState } from 'react'

export default function TodoForm({ onAdd, errors, onSuccess, onCancel }) {
    const [title, setTitle] = useState('')
    const [note, setNote] = useState('')
    const [priority, setPriority] = useState('normal')
    const [dueDate, setDueDate] = useState('')
    const [dueTime, setDueTime] = useState('')
    async function handleSubmit() { 
        const success = await onAdd({ title, note, priority, dueDate: dueDate || null, dueTime: dueTime || null })
        
        if (success) {
            setTitle('')
            setNote('')
            setPriority('normal')
            setDueDate('')
            setDueTime('')
            onSuccess?.() 
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

        <input
            type="time"
            value={dueTime}
            onChange={(e) => setDueTime(e.target.value)}
        />
        {errors.dueTime && <p>{errors.dueTime}</p>}


        <button onClick={handleSubmit}>Add Task</button>
        <button onClick={onCancel}>Cancel</button>
        </div>
    )
}