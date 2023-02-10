import PropTypes from 'prop-types'
import { useState } from 'react'
const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!Text) {
      alert('Please add a task')
      return
    }

    onAdd({ text, day, reminder })

    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col justify-between my-6">
        <label className="my-2">Task</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add Task"
          className="border-2 h-10 w-full text-sm px-4 rounded-lg"
        />
      </div>

      <div className="flex flex-col justify-between my-6">
        <label className="my-2">Day & Time</label>
        <input
          type="text"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          placeholder="Add Day and Time"
          className="border-2 h-10 w-full text-sm px-4 rounded-lg"
        />
      </div>

      <div className="flex justify-between my-6">
        <label className="my-2 w-1/2">Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
          className="border-2 h-4 w-full text-sm px-4 my-2 rounded-lg"
        />
      </div>
      <input
        type="submit"
        value="Save Task"
        className=" flex justify-center items-center bg-black text-white w-full h-10 rounded-lg cursor-pointer"
      />
    </form>
  )
}

AddTask.propTypes = {
  onAdd: PropTypes.func,
}
export default AddTask
