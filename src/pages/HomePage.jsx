import { useAuth } from '../lib/AuthContext'
import { useTodos } from '../hooks/useTodos'
import { signOut } from 'firebase/auth'
import { auth } from '../lib/firebase'
import TodoList from '../components/todos/TodoList'

import { useDates } from '../hooks/useDates'
import DateList from '../components/dates/DateList'

export default function HomePage() {
  const { user } = useAuth()
  const { dates, loading : datesLoading, errors : datesErrors, addDate, deleteDate } = useDates(user.uid)
  const { todos, loading : todosLoading, errors : todosErrors, addTodo, toggleTodo, deleteTodo } = useTodos(user.uid)



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
          loading={todosLoading}
          errors={todosErrors}
          onAdd={addTodo}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
        <DateList
          dates={dates}
          loading={datesLoading}
          errors={datesErrors}
          onAdd={addDate}
          onDelete={deleteDate}
        />
      </main>
    </div>
  )
}