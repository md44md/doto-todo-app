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
        <div className="form">
            <div className="form-field">
                <input
                    className="form-input"
                    type="text"
                    placeholder="Task title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div  className="form-field">
                <textarea
                    className="form-textarea"
                    placeholder="Note (optional)"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                />
            </div> 

            <div className="form-field">
                <select className="form-select" value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="high">High</option>
                    <option value="normal">Normal</option>
                    <option value="low">Low</option>
                </select>
            </div>

            <div className="form-row">
                <input
                    className="form-input"
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                />
                {dueDate && (
                    <button 
                        type="button"
                        className="btn-clear"
                        onClick={() => setDueDate('')}
                        aria-label='Clear due date'>
                        x
                    </button>
                )}
                
                <input
                    className="form-input"
                    type="time"
                    value={dueTime}
                    onChange={(e) => setDueDate(e.target.value)}
                />
                {dueTime && (
                    <button 
                        type="button"
                        className="btn-clear"
                        onClick={() => setDueTime('')}
                        aria-label='Clear due time'>
                        x
                    </button>
                )}
            </div>

            {errors.title && <p className="form-error">{errors.title}</p>}
            <div className="form-actions">
                <button className="btn-primary" onClick={handleSubmit}>Add Task</button>
                <button className="btn-secondary" onClick={onCancel}>Cancel</button>
            </div>
        </div>
    )
}