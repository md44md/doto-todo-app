import { useAuth } from '../lib/AuthContext'
import { useTodos } from '../hooks/useTodos'
import { signOut } from 'firebase/auth'
import { auth } from '../lib/firebase'
import TodoList from '../components/todos/TodoList'

export default function HomePage() {
  const { user } = useAuth()
  const { todos, loading, errors, addTodo, toggleTodo, deleteTodo } = useTodos(user.uid)

  return (
    <div>
      <header>
        <h1>Doto Todo app</h1>
        <p>Welcome, {user.email}</p>
        <button onClick={() => signOut(auth)}>Sign out</button>
      </header>

      <main>
        <TodoList
          todos={todos}
          loading={loading}
          errors={errors}
          onAdd={addTodo}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      </main>
    </div>
  )
}