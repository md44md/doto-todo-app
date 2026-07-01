import TodoItem from './TodoItem'

export default function TodoList({ todos, loading, errors, onToggle, onUpdate, onDelete, clearErrors }) {
  
  const isOverdue = (todo) => {
    if (!todo.dueDate) return false

    const now = new Date()

    if (todo.dueTime) {
      const due = new Date(`${todo.dueDate}T${todo.dueTime}`)
      return due < now
    }

    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return new Date(todo.dueDate) < today
  }  
  const activeTodos = todos.filter(todo => !todo.completed && !isOverdue(todo))
  const overdue = todos.filter(todo => !todo.completed && isOverdue(todo))
  const completedTodos = todos.filter(todo => todo.completed)

  if (loading) return <p>Loading...</p>

  return (
    <div className='todo-items-col'>
      <h2>My Tasks</h2>

      {activeTodos.length === 0 && <p>No tasks yet — add one now!</p>}

      {activeTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onUpdate={onUpdate}
          onDelete={onDelete}
          errors={errors}
          clearErrors={clearErrors}
        />
      ))}

      {overdue.length > 0 && (
        <div>
          <p className="danger">Overdue ({overdue.length})</p>
          {overdue.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onUpdate={onUpdate}
              onDelete={onDelete}
              errors={errors}
              clearErrors={clearErrors}
            />
          ))}
        </div>
      )}


      {completedTodos.length > 0 && (
        <div>
          <p>Completed ({completedTodos.length})</p>
          {completedTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onUpdate={onUpdate}
              onDelete={onDelete}
              errors={errors}
              clearErrors={clearErrors}
            />
          ))}
        </div>
      )}
    </div>
  )
}