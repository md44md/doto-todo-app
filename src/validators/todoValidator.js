export function validateTodo({ title, dueDate, dueTime, priority }){
    const errors = {}

    if (!title || title.trim() === '') {
        errors.title = 'Title is required'
    } else if (title.length > 200) {
        errors.title = 'Title must be less than 200 characters'
    }

    if (dueDate) {
        const date = new Date(dueDate)
        if (isNaN(date.getTime())) {
        errors.dueDate = 'Please enter a valid date'
        }
    }

    if (dueTime) {
        const [hours, minutes] = dueTime.split(':')
        if (!hours || !minutes || isNaN(hours) || isNaN(minutes)) {
            errors.dueTime = 'Please enter a valid time'
        }
    }

    const validPriorities = ['low', 'normal', 'high']
    if (!validPriorities.includes(priority)) {
        errors.priority = 'Priority must be low, normal, or high'
    }

    return errors
}