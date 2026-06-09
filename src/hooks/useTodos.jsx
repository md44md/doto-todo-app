import { useState, useEffect } from 'react'
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from '../lib/firebase'
import { validateTodo } from '../validators/todoValidator'

// sort by due date first, then by priority
const PRIORITY_ORDER = { high: 1, normal: 2, low: 3 }

function sortTodos(todos) {
  return [...todos].sort((a, b) => {
    const dateA = a.dueDate ? new Date(a.dueDate) : Infinity
    const dateB = b.dueDate ? new Date(b.dueDate) : Infinity

    if (dateA !== dateB) return dateA - dateB

    return PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority]
  })
}

export function useTodos(uid) {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState({})

    useEffect(() => {
        if (!uid) return

        const q = query(
        collection(db, 'users', uid, 'todos'),
    )

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))

            const sorted = sortTodos(data)  // sort before setting state
            setTodos(sorted)
            setLoading(false)
        })

        return unsubscribe  
    }, [uid])

    async function addTodo({ title, note = '', priority = 'normal', dueDate = null }) {
        const validationErrors = validateTodo({ title, priority, dueDate })

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return false
        }

        setErrors({})
        await addDoc(collection(db, 'users', uid, 'todos'), {
            title: title.trim(),
            note,
            priority,
            dueDate,
            completed: false,
            createdAt: serverTimestamp(),
        })
        return true
    }

    // Toggle completed on/off
    async function toggleTodo(todoId, currentValue) {
        await updateDoc(doc(db, 'users', uid, 'todos', todoId), {
            completed: !currentValue,
        })
    }

    // Delete a todo
    async function deleteTodo(todoId) {
        await deleteDoc(doc(db, 'users', uid, 'todos', todoId))
    }

    return { todos, loading, errors, addTodo, toggleTodo, deleteTodo }
}
