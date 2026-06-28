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
import logo from '../styles/doto.webp'

export default function HomePage() {
  const { user } = useAuth()
  const { dates, loading: datesLoading, errors: datesErrors, addDate, toggleDate, updateDate, deleteDate, clearErrors: clearDateErrors } = useDates(user.uid)
  const { todos, loading: todosLoading, errors: todosErrors, addTodo, toggleTodo, updateTodo, deleteTodo, clearErrors: clearTodoErrors } = useTodos(user.uid)

  const [modalOpen, setModalOpen] = useState(false)
  const [formType, setFormType] = useState(null)

  function openModal(type) {
    setFormType(type)
    setModalOpen(true)
    clearTodoErrors()
    clearDateErrors()
  }

  function closeModal() {
    setModalOpen(false)
    setFormType(null)
    clearTodoErrors()
    clearDateErrors()
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
    <div className="app-container">
      <header className="app-header-container">
        <div className="app-title-container">
          <h1 className="app-title">Doto Todo App</h1>
          <img className="app-logo" src={logo} alt="Logo"/>
        </div>
        <p>Welcome, {user.email}</p>
        <button className="btn-secondary sign-out" onClick={() => signOut(auth)}>Sign out</button>
      </header>

      <main>
        <div className="todo-list-container">
          <DateList dates={dates} errors={datesErrors} loading={datesLoading} onToggle={toggleDate} onUpdate={updateDate} onDelete={deleteDate} clearErrors={clearDateErrors} />
          <TodoList todos={todos} errors={todosErrors} loading={todosLoading} onToggle={toggleTodo} onUpdate={updateTodo} onDelete={deleteTodo} clearErrors={clearTodoErrors} />
        </div>

        <button className={"add-button"} onClick={() => setModalOpen(true)}>+</button>

        {modalOpen && !formType && (
          <div className="modal-overlay">
            <div className="modal-card">
              <div className="add-choice-buttons">
                <button className="btn-primary" onClick={() => openModal('date')}>Add Date</button>
                <button className="btn-primary" onClick={() => openModal('todo')}>Add Task</button>
                <button className="btn-secondary" onClick={closeModal}>Cancel</button>
              </div>
            </div>
          </div>
        )}

        {modalOpen && formType === 'todo' && (
          <div className="modal-overlay">
            <div className="modal-card">
              <TodoForm onAdd={addTodo} errors={todosErrors} onSuccess={closeModal} onCancel={closeModal} />
            </div>
          </div>
        )}

        {modalOpen && formType === 'date' && (
          <div className="modal-overlay">
            <div className="modal-card">
              <DateForm onAdd={addDate} errors={datesErrors} onSuccess={closeModal} onCancel={closeModal} />
            </div>
          </div>
        )}
      </main>
    </div>
  )
}