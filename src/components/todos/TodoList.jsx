import TodoItem from './TodoItem'

export default function TodoList({ todos, loading, onToggle, onDelete }) {
  const activeTodos = todos.filter(todo => !todo.completed)
  const completedTodos = todos.filter(todo => todo.completed)

  if (loading) return <p>Loading...</p>

  return (
    <div>
      <h2>My Tasks</h2>

      {activeTodos.length === 0 && <p>No tasks yet — add one above!</p>}

      {activeTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}

      {completedTodos.length > 0 && (
        <div>
          <p>Completed ({completedTodos.length})</p>
          {completedTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  )
}