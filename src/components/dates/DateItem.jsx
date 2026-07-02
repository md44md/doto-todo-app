import { useState } from "react"

export default function DateItem({ date, onToggle, onUpdate, onDelete, errors, clearErrors }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(date.title)  
  const [editNote, setEditNote] = useState(date.note || '')
  const [editDate, setEditDate] = useState(date.date)
  const [editTime, setEditTime] = useState(date.time || '')
  const [editRepeat, setEditRepeat] = useState(date.repeat)

  async function handleSave() {
    const success = await onUpdate(date.id, { title: editTitle, note: editNote, date: editDate, time: editTime, repeat: editRepeat })
    if (success){
      setIsEditing(false)
    }
  }

  function startEditing() {
    setIsEditing(true)
    clearErrors()
  }


  function handleCancel() {
    setEditTitle(date.title)
    setEditNote(date.note)
    setEditDate(date.date)
    setEditTime(date.time)
    setEditRepeat(date.repeat)

    setIsEditing(false)
    clearErrors()
  }
  
  if (isEditing) {
    return (
      <div className="item item-editing">
        <div className="form edit-form">
          <div className="form-field">
            <input
              className="form-input"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
          </div>

          <div className="form-field">
            <textarea
              className="form-textarea"
              value={editNote}
              onChange={(e) => setEditNote(e.target.value)}
            />
          </div>

          <div className="form-row">
            <input
              className="form-input"
              type="date"
              value={editDate}
              onChange={(e) => setEditDate(e.target.value)}
            />
            {editDate && (
              <button 
                type="button"
                className="btn-clear"
                onClick={() => setEditDate('')}
                aria-label='Clear date'>
                x
              </button>
            )}      

            <input
              className="form-input"
              type="time"
              value={editTime}
              onChange={(e) => setEditTime(e.target.value)}
            />
            {editTime && (
              <button 
                type="button"
                className="btn-clear"
                onClick={() => setEditTime('')}
                aria-label='Clear time'>
                x
              </button>
            )}
          </div>

          <div className="form-field">
              <select className="form-select" value={editRepeat} onChange={(e) => setEditRepeat(e.target.value)}>
                  <option value="none">Does not repeat</option>
                  <option value="yearly">Repeats yearly</option>
              </select>
          </div>

          {errors.title && <p className="form-error">{errors.title}</p>}
          {errors.date && <p className="form-error">{errors.date}</p>}
          <div className="form-actions">
            <button className="btn-primary" onClick={handleSave}>Save</button>
            <button className="btn-secondary" onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="item">
      <div className="item-main">
        <div className={date.completed ? 'item-content item-content-done' : 'item-content'}>
          {date.title && <p>{date.title}</p>}
          {date.note && <p>{date.note}</p>}
          {date.date && <p>Date: {date.date}</p>}
          {date.time && <p>Time: {date.time}</p>}
          {date.repeat === 'yearly' && <span> 🔁 Repeats yearly</span>}
        </div>
      </div>

      <div className="item-actions">
        <button className="btn-primary" onClick={startEditing}>Edit</button>
        <button className="btn-secondary" onClick={() => onDelete(date.id)}>Delete</button>
      </div>
    </div>
  )
}