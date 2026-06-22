export default function DateItem({ date, onDelete }) {
  return (
    <div>
      <div>
        <p>
          {date.title}
        </p>
        {date.note && <p>{date.note}</p>}
        {date.date && <p>Date: {date.date}</p>}
        {date.time && <p>Time: {date.time}</p>}
        {date.repeat === 'yearly' && <span> 🔁 Repeats yearly</span>}
      </div>

      <button onClick={() => onDelete(date.id)}>Delete</button>
    </div>
  )
}