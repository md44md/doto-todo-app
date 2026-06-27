import { useState, useMemo } from 'react'
import { useAuth } from '../lib/AuthContext'
import { useTodos } from '../hooks/useTodos'
import { useDates } from '../hooks/useDates'
import { signOut } from 'firebase/auth'
import { auth } from '../lib/firebase'
import { useNotifications } from '../hooks/useNotifications'

import TodoList from '../components/todos/TodoList'
import TodoForm from '../components/todos/TodoForm'
import DateList from '../components/dates/DateList'
import DateForm from '../components/dates/DateForm'

export default function HomePage() {
  const { user } = useAuth()
  const { dates, loading: datesLoading, errors: datesErrors, addDate, updateDate, deleteDate } = useDates(user.uid)
  const { todos, loading: todosLoading, errors: todosErrors, addTodo, toggleTodo, updateTodo, deleteTodo } = useTodos(user.uid)

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

  const notificationGroups = useMemo(
    () => [
        { items: todos.map(todo => ({ ...todo, date: todo.dueDate, time: todo.dueTime })),
      updateItem: updateTodo, },
        { items: dates, updateItem: updateDate },
    ],
    [todos, dates, updateTodo, updateDate]
  );

  useNotifications(notificationGroups);

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
          <TodoList todos={todos} errors={todosErrors} loading={todosLoading} onToggle={toggleTodo} onUpdate={updateTodo} onDelete={deleteTodo} />
          <DateList dates={dates} errors={datesErrors} loading={datesLoading} onUpdate={updateDate} onDelete={deleteDate} />
        </div>
      </main>
    </div>
  )
}