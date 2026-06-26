export function validateTitle({ title }){
    const errors = {}
    
    if (!title || title.trim() === '') {
        errors.title = 'Title is required'
    } else if (title.length > 200) {
        errors.title = 'Title must be less than 200 characters'
    }

    return errors
}