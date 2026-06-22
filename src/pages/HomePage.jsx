import { useState } from 'react'
import { useAuth } from '../lib/AuthContext'
import { useTodos } from '../hooks/useTodos'
import { useDates } from '../hooks/useDates'
import { signOut } from 'firebase/auth'
import { auth } from '../lib/firebase'

import TodoList from '../components/todos/TodoList'
import TodoForm from '../components/todos/TodoForm'
import DateList from '../components/dates/DateList'
import DateForm from '../components/dates/DateForm'

export default function HomePage() {
  const { user } = useAuth()
  const { dates, loading: datesLoading, errors: datesErrors, addDate, deleteDate } = useDates(user.uid)
  const { todos, loading: todosLoading, errors: todosErrors, addTodo, toggleTodo, deleteTodo } = useTodos(user.uid)

  const [modalOpen, setModalOpen] = useState(false)
  const [formType, setFormType] = useState(null)

  function openModal(type) {
    setFormType(type)
    setModalOpen(true)
  }

  function closeModal() {
    setModalOpen(false)
    setFormType(null)
  }

  return (
    <div>
      <header>
        <h1>Doto Todo app</h1>
        <p>Welcome, {user.email}</p>
        <button onClick={() => signOut(auth)}>Sign out</button>
      </header>

      <main>
        <button onClick={() => setModalOpen(true)}>+ Add</button>

        {modalOpen && !formType && (
          <div className="modal">
            <button onClick={() => openModal('todo')}>Add Task</button>
            <button onClick={() => openModal('date')}>Add Date</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        )}

        {modalOpen && formType === 'todo' && (
          <div className="modal">
            <TodoForm onAdd={addTodo} errors={todosErrors} onSuccess={closeModal} onCancel={closeModal} />
          </div>
        )}

        {modalOpen && formType === 'date' && (
          <div className="modal">
            <DateForm onAdd={addDate} errors={datesErrors} onSuccess={closeModal} onCancel={closeModal} />
          </div>
        )}

        <div style={{ display: 'flex', gap: '24px' }}>
          <TodoList todos={todos} loading={todosLoading} onToggle={toggleTodo} onDelete={deleteTodo} />
          <DateList dates={dates} loading={datesLoading} onDelete={deleteDate} />
        </div>
      </main>
    </div>
  )
}