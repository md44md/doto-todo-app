import { useState } from 'react'

export default function DateForm({ onAdd, errors, onSuccess, onCancel }) {
    const [title, setTitle] = useState('')
    const [note, setNote] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [repeat, setRepeat] = useState('none')

    async function handleSubmit() { 
        const success = await onAdd({ title, note, date, time, repeat })
        
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
        <div className="form">
            <div className="form-field">
                <input
                    className="form-input"
                    type="text"
                    placeholder="Date title"
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

            <div className="form-row">
                <input
                    className="form-input"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                {date && (
                    <button 
                        type="button"
                        className="btn-clear"
                        onClick={() => setDate('')}
                        aria-label='Clear date'>
                        x
                    </button>
                )}
                
                <input
                    className="form-input"
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
                {time && (
                    <button 
                        type="button"
                        className="btn-clear"
                        onClick={() => setTime('')}
                        aria-label='Clear time'>
                        x
                    </button>
                )}
            </div>

            <div className="form-field">
                <select className="form-select" value={repeat} onChange={(e) => setRepeat(e.target.value)}>
                    <option value="none">Does not repeat</option>
                    <option value="yearly">Repeats yearly</option>
                </select>
            </div>

            {errors.title && <p className="form-error">{errors.title}</p>}
            {errors.date && <p className="form-error">{errors.date}</p>}
            <div className="form-actions">
                <button className="btn-primary" onClick={handleSubmit}>Add Date</button>
                <button className="btn-secondary" onClick={onCancel}>Cancel</button>
            </div>
        </div>
    )
}