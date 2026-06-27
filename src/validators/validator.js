export function validateTitle({ title }){
    const errors = {}
    
    if (!title || title.trim() === '') {
        errors.title = 'Title is required'
    } else if (title.length > 200) {
        errors.title = 'Title must be less than 200 characters'
    }

    return errors
}

export function validateDate({ date }) {
    const errors = {}

    if (!date || date.trim() === '') {
        errors.date = 'Date is required'
    } else {
        const dateObj = new Date(date)
        if (isNaN(dateObj.getTime())) {
        errors.date = 'Please enter a valid date'
        }
    }

    return errors
}