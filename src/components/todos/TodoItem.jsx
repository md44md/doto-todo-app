import { useState } from "react"

export default function TodoItem({ todo, onToggle, onUpdate, onDelete, errors, clearErrors }) {
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

  function startEditing() {
    setIsEditing(true)
    clearErrors()
  }

  function handleCancel() {
    setEditTitle(todo.title)
    setEditNote(todo.note)
    setEditPriority(todo.priority)
    setEditDueDate(todo.dueDate)
    setEditDueTime(todo.dueTime)

    setIsEditing(false)
    clearErrors()
  }

  if (isEditing) {
    return (
      <div className="item-editing">
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

          <div className="form-field">
            <select className="form-select" value={editPriority} onChange={(e) => setEditPriority(e.target.value)}>
              <option value="high">High</option>
              <option value="normal">Normal</option>
              <option value="low">Low</option>
            </select>
          </div> 

          <div className="form-field">
            <input
              className="form-input"
              type="date"
              value={editDueDate}
              onChange={(e) => setEditDueDate(e.target.value)}
            />
          </div> 
          <div className="form-field">
            <input
              className="form-input"
              type="time"
              value={editDueTime}
              onChange={(e) => setEditDueTime(e.target.value)}
            />
          </div>

          {errors.title && <p className="form-error">{errors.title}</p>}
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

      <div className="item-actions">
        <button className="btn-primary" onClick={startEditing}>Edit</button>
        <button className="btn-secondary" onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    </div>
  )
}