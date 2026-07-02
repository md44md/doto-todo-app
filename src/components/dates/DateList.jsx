import DateItem from './DateItem'

export default function DateList({ dates, loading, errors, onAdd, onToggle, onUpdate, onDelete, clearErrors }) {

  const isPast = (date) => {
    if (!date.date) return false

    const now = new Date()

    if (date.time) {
      const due = new Date(`${date.date}T${date.time}`)
      return due < now
    }

    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return new Date(date.date) < today
  }
  const activeDates = dates.filter(date => !date.completed && !isPast(date))
  const pastDates = dates.filter(date => !date.completed && isPast(date) && date.repeat === 'none')

  if (loading) return <p>Loading...</p>

  return (
    <div className='todo-date-col'>
      <h2>My Dates</h2>

      {activeDates.length === 0 && <p>No dates yet — add one now!</p>}

      {activeDates.map(date => (
        <DateItem
          key={date.id}
          date={date}
          onToggle={onToggle}
          onUpdate={onUpdate}
          onDelete={onDelete}
          errors={errors}
          clearErrors={clearErrors}
        />
      ))}

      {pastDates.length > 0 && (
        <div className="section-col">
          <p className="danger">Past({pastDates.length})</p>
          {pastDates.map(date => (
            <DateItem
              key={date.id}
              date={date}
              onToggle={onToggle}
              onUpdate={onUpdate}
              onDelete={onDelete}
              errors={errors}
              clearErrors={clearErrors}
            />
          ))}
        </div>
      )}
    </div>
  )
}