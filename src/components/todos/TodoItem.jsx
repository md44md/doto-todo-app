import { useState } from "react"

export default function TodoItem({ todo, onToggle, onUpdate, onDelete, errors }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(todo.title)  
  const [editNote, setEditNote] = useState(todo.note || '')
  const [editPriority, setEditPriority] = useState(todo.priority)
  const [editDueDate, setEditDueDate] = useState(todo.dueDate || '')
  const [editDueTime, setEditDueTime] = useState(todo.dueTime || '')

  async function handleSave() {
    const success = await onUpdate(todo.id, { title: editTitle, note: editNote, priority: editPriority, dueDate: editDueDate, dueTime: editDueTime })

    if (success){
      setIsEditing(false)
    }
  }

  function handleCancel() {
    setEditTitle(todo.title)
    setEditNote(todo.note)
    setEditPriority(todo.priority)
    setEditDueDate(todo.dueDate)
    setEditDueTime(todo.dueTime)

    setIsEditing(false)
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

        <select value={editPriority} onChange={(e) => setEditPriority(e.target.value)}>
            <option value="high">High</option>
            <option value="normal">Normal</option>
            <option value="low">Low</option>
        </select>

        <input
            type="date"
            value={editDueDate}
            onChange={(e) => setEditDueDate(e.target.value)}
        />

        <input
            type="time"
            value={editDueTime}
            onChange={(e) => setEditDueTime(e.target.value)}
        />
        {errors.title && <p>{errors.title}</p>}
        <button onClick={handleSave}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    )
  }

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id, todo.completed)}
      />

      <div>
        <p style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.title}
        </p>
        {todo.note && <p>{todo.note}</p>}
        {todo.dueDate && <p>Due: {todo.dueDate}</p>}
        {todo.dueTime && <p>Time: {todo.dueTime}</p>}
        <p>Priority: {todo.priority}</p>
      </div>

      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  )
}