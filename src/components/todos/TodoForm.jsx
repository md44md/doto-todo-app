import { useState } from 'react'

export default function TodoForm({ onAdd, errors, onSuccess, onCancel }) {
    const [title, setTitle] = useState('')
    const [note, setNote] = useState('')
    const [priority, setPriority] = useState('normal')
    const [dueDate, setDueDate] = useState('')
    const [dueTime, setDueTime] = useState('')
    async function handleSubmit() { 
        const success = await onAdd({ title, note, priority, dueDate, dueTime })
        
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

        <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
        />

        <input
            type="time"
            value={dueTime}
            onChange={(e) => setDueTime(e.target.value)}
        />


        <button onClick={handleSubmit}>Add Task</button>
        <button onClick={onCancel}>Cancel</button>
        </div>
    )
}