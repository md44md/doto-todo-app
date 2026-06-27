import { useState } from "react"

export default function DateItem({ date, onToggle, onUpdate, onDelete, errors, clearErrors }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(date.title)  
  const [editNote, setEditNote] = useState(date.note || '')
  const [editDate, setEditDate] = useState(date.date)
  const [editTime, setEditTime] = useState(date.time || '')

  async function handleSave() {
    const success = await onUpdate(date.id, { title: editTitle, note: editNote, date: editDate, time: editTime })
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

    setIsEditing(false)
    clearErrors()
  }
  
  if (isEditing) {
    return (
      <div>
        <input
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />

        <textarea
          value={editNote}
          onChange={(e) => setEditNote(e.target.value)}
        />

        <input
            type="date"
            value={editDate}
            onChange={(e) => setEditDate(e.target.value)}
        />

        <input
            type="time"
            value={editTime}
            onChange={(e) => setEditTime(e.target.value)}
        />
        {errors.title && <p>{errors.title}</p>}
        {errors.date && <p>{errors.date}</p>}
        <button onClick={handleSave}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    )
  }

  return (
    <div className="item">
      <input
        type="checkbox"
        checked={date.completed}
        onChange={() => onToggle(date.id, date.completed)}
      />

      <div>
        <p style={{ textDecoration: date.completed ? 'line-through' : 'none' }}>
          {date.title}
        </p>
        {date.note && <p>{date.note}</p>}
        {date.date && <p>Date: {date.date}</p>}
        {date.time && <p>Time: {date.time}</p>}
        {date.repeat === 'yearly' && <span> 🔁 Repeats yearly</span>}
      </div>

      <button onClick={startEditing}>Edit</button>
      <button onClick={() => onDelete(date.id)}>Delete</button>
    </div>
  )
}