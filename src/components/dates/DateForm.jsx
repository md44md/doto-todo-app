import { useState } from 'react'

export default function DateForm({ onAdd, errors, onSuccess, onCancel }) {
    const [title, setTitle] = useState('')
    const [note, setNote] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [repeat, setRepeat] = useState('none')

    async function handleSubmit() { 
        const success = await onAdd({ title, note, date, time: time || null, repeat })
        
        if (success) {
            setTitle('')
            setNote('')
            setDate('')
            setTime('')
            setRepeat('none')
            onSuccess?.() 
        }
    }
    return (
        <div>
        <input
            type="text"
            placeholder="Date title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && <p>{errors.title}</p>}

        <textarea
            placeholder="Note (optional)"
            value={note}
            onChange={(e) => setNote(e.target.value)}
        />

        <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
        />
        {errors.date && <p>{errors.date}</p>}

        <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
        />
        {errors.time && <p>{errors.time}</p>}

        <select value={repeat} onChange={(e) => setRepeat(e.target.value)}>
            <option value="none">Does not repeat</option>
            <option value="yearly">Repeats yearly</option>
        </select>

        <button onClick={handleSubmit}>Add Date</button>
        <button onClick={onCancel}>Cancel</button>
        </div>
    )
}