export function validateDate({ title, date, repeat }){
    const errors = {}
    
    if (!title || title.trim() === '') {
        errors.title = 'Title is required'
    } else if (title.length > 200) {
        errors.title = 'Title must be less than 200 characters'
    }

    if (date) {
        const dateObj = new Date(date)
        if (isNaN(dateObj.getTime())) {
            errors.date = 'Please enter a valid date'
        }
    }

    const validRepeats = ['none', 'yearly']
    if (!validRepeats.includes(repeat)) {
        errors.repeat = 'Repeat must be none or yearly'
    }

    return errors
}