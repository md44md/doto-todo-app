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
import { validateTitle, validateDate } from '../validators/validator'
import { requestNotificationPermission } from '../lib/notifications'

function sortDates(dates) {
    return [...dates].sort((a, b) => {
        const dateA = getNextOccurrence(a.date, a.time, a.repeat)
        const dateB = getNextOccurrence(b.date, b.time, b.repeat)
        return dateA - dateB
    })
}

function getNextOccurrence(dateStr, timeStr, repeat) {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const date = new Date(dateStr)

    if (timeStr) {
        const [hours, minutes] = timeStr.split(':')
        date.setHours(parseInt(hours), parseInt(minutes), 0, 0)
    }

    if (repeat === 'yearly') {
        date.setFullYear(today.getFullYear())
        if (date < today) date.setFullYear(today.getFullYear() + 1)
    }

    return date
}

export function useDates(uid) {
    const [dates, setDates] = useState([])
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState({})

        useEffect(() => {
        if (!uid) return

        const q = query(
            collection(db, 'users', uid, 'dates'),
        )

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))

            const sorted = sortDates(data)
            setDates(sorted)
            setLoading(false)
        })

        return unsubscribe  
    }, [uid])

    // Add date
    async function addDate({ title, note = '', date, time = '', repeat = 'none' }) {
        const errors = {
            ...validateTitle({ title }),
            ...validateDate({ date }),
        }

        if (Object.keys(errors).length > 0) {
            setErrors(errors)
            return false
        }

        setErrors({})

        if (date) {
            await requestNotificationPermission()
        }        
        
        await addDoc(collection(db, 'users', uid, 'dates'), {
            title: title.trim(),
            note: note.trim(),
            date,
            time,
            repeat,
            createdAt: serverTimestamp(),
        })
        return true
    }
        
    // Delete a date
    async function deleteDate(dateId) {
        await deleteDoc(doc(db, 'users', uid, 'dates', dateId))
    }

    const updateDate = useCallback(async (dateId, fields) => {
        await updateDoc(doc(db, 'users', uid, 'dates', dateId), fields)
    }, [uid])    

    return { dates, loading, errors, addDate, deleteDate, updateDate }
}