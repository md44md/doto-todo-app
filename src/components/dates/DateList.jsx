import DateForm from './DateForm'
import DateItem from './DateItem'

export default function DateList({ dates, loading, errors, onAdd, onToggle, onDelete }) {
  const activeDates = dates.filter(date => !date.completed)
  const completedDates = dates.filter(date => date.completed)

  if (loading) return <p>Loading...</p>

  return (
    <div>
      <h2>My Dates</h2>

      <DateForm onAdd={onAdd} errors={errors} />

      {activeDates.length === 0 && <p>No dates yet — add one above!</p>}

      {activeDates.map(date => (
        <DateItem
          key={date.id}
          date={date}
          onDelete={onDelete}
        />
      ))}

      {completedDates.length > 0 && (
        <div>
          <p>Completed ({completedDates.length})</p>
          {completedDates.map(date => (
            <DateItem
              key={date.id}
              date={date}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  )
}