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

export function useTodos(uid) {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState({})

    useEffect(() => {
        if (!uid) return

        const q = query(
        collection(db, 'users', uid, 'todos'),
        orderBy('createdAt', 'desc')
    )

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))
            setTodos(data)
            setLoading(false)
        })

        return unsubscribe  // stop listening when component unmounts
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
