import { useState, useEffect, useCallback } from 'react'
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
import { validateTitle } from '../validators/validator'
import { requestNotificationPermission } from '../lib/notifications'

// sort by due date first, then by priority
const PRIORITY_ORDER = { high: 1, normal: 2, low: 3 }

function sortTodos(todos) {
  return [...todos].sort((a, b) => {
    const dateA = getDueDateTime(a.dueDate, a.dueTime)
    const dateB = getDueDateTime(b.dueDate, b.dueTime)

    if (dateA !== dateB) return dateA - dateB

    return PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority]
  })
}

function getDueDateTime(dueDate, dueTime) {
  if (!dueDate) return Infinity   // no due date = sort to the bottom

  const date = new Date(dueDate)

  if (dueTime) {
    const [hours, minutes] = dueTime.split(':')
    date.setHours(parseInt(hours), parseInt(minutes), 0, 0)
  }

  return date
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

    async function addTodo({ title, note = '', priority = 'normal', dueDate = null, dueTime = null }) {
        const validationErrors = validateTitle({ title })

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return false
        }

        setErrors({})

        if (dueDate) {
            await requestNotificationPermission()
        }        
        
        await addDoc(collection(db, 'users', uid, 'todos'), {
            title: title.trim(),
            note,
            priority,
            dueDate,
            dueTime,
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
    
    // Update a todo
    const updateTodo = useCallback(async (todoId, fields) => {
        const validationErrors = {
            ...(fields.title !== undefined ? validateTitle({ title: fields.title }) : {}),
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return false
        }

        setErrors({})

        await updateDoc(doc(db, 'users', uid, 'todos', todoId), fields)
        return true
    }, [uid])

    return { todos, loading, errors, addTodo, toggleTodo, deleteTodo, updateTodo }
}
