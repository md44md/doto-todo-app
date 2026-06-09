export default function TodoItem({ todo, onToggle, onDelete }) {
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
        <p>Priority: {todo.priority}</p>
      </div>

      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  )
}