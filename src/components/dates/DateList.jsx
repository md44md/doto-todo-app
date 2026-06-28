import DateItem from './DateItem'

export default function DateList({ dates, loading, errors, onAdd, onToggle, onUpdate, onDelete, clearErrors }) {
  const activeDates = dates.filter(date => !date.completed)
  const completedDates = dates.filter(date => date.completed)

  if (loading) return <p>Loading...</p>

  return (
    <div className='todo-date-col'>
      <h2>My Dates</h2>

      {activeDates.length === 0 && <p>No dates yet — add one above!</p>}

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

      {completedDates.length > 0 && (
        <div>
          <p>Completed ({completedDates.length})</p>
          {completedDates.map(date => (
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